import { frontSortArray, traverseDownLoadTree } from '@/common';
import {
  ApiResponse,
  CommonSortOrder,
  Dataset,
  DatasetParams,
  DiseaseFullInfo,
  DiseaseSuggestData,
  DownloadNodeData,
  DrugInfo,
  DrugSuggestData,
  HomeDatasetData,
  Method,
  MethodParams,
  RequestParams,
  SearchDatasetMethodData,
  SearchDatasetMethodParams,
  SearchSuggestParams,
  StatisticsData,
} from '@/types';
import { request } from '@umijs/max';
import _ from 'lodash';

export const getDiseaseListService = async (diseaseNames: string[]) => {
  return request<ApiResponse<DiseaseFullInfo[]>>(`/v1/diseases`, {
    method: 'POST',
    data: {
      disease_names: diseaseNames,
    },
  });
};

export async function getDiseaseNames<T extends DiseaseSuggestData>(
  dataSource: T[] = [],
  isRepeat: boolean = false,
) {
  let _diseaseNames = dataSource.map((item) => item.disease_name);
  _diseaseNames = _.unionBy(_diseaseNames);

  const { data: diseaseList } = await getDiseaseListService(_diseaseNames);

  let _dataSource = dataSource.map((item) => {
    let _item = _.cloneDeep(item);
    const currentDiseaseInfo = diseaseList.find(
      (child) => child.disease_name === item.disease_name,
    );
    if (currentDiseaseInfo) {
      _item = _.assign(_item, currentDiseaseInfo);
      _item.disease_uuid = `${currentDiseaseInfo.do_id}${currentDiseaseInfo.mesh_id}${currentDiseaseInfo.omim_id}${currentDiseaseInfo.medgen_id}`;
    }
    return _item;
  });

  if (isRepeat) {
    _dataSource = _.unionBy(_dataSource, 'disease_uuid');
  }

  return _dataSource;
}

export const getDatasetService = async (params: DatasetParams) => {
  return request<ApiResponse<Dataset>>('/v1/dataset', {
    method: 'GET',
    params,
  });
};

export const getMethodService = async (params: MethodParams) => {
  return request<ApiResponse<Method>>('/v1/method', {
    method: 'GET',
    params,
  });
};

export const getHomeDataService = async () => {
  return request<ApiResponse<HomeDatasetData>>('/v1/method-dataset', {
    method: 'GET',
  });
};

export const getSearchDataService = async (
  params: SearchDatasetMethodParams,
  needCombineName: boolean = false,
) => {
  const res = await request<ApiResponse<SearchDatasetMethodData[]>>(
    '/v1/search',
    {
      method: 'POST',
      data: params,
    },
  );

  let suggestDiseaseList = res.data || [];

  const _data = needCombineName
    ? await getDiseaseNames<SearchDatasetMethodData>(suggestDiseaseList)
    : suggestDiseaseList;

  return {
    ...res,
    data: _data,
  };
};

export const getDrugSuggestService = async (params: SearchSuggestParams) => {
  return request<ApiResponse<DrugSuggestData[]>>('/v1/drug/suggest', {
    method: 'GET',
    params,
  });
};

export const getDiseaseSuggestService = async (params: SearchSuggestParams) => {
  const res = await request<ApiResponse<DiseaseFullInfo[]>>(
    '/v1/disease/suggest',
    {
      method: 'GET',
      params,
    },
  );
  const suggestDiseaseList = res.data || [];
  const _data = await getDiseaseNames<DiseaseFullInfo>(
    suggestDiseaseList,
    true,
  );
  return {
    ...res,
    data: _data,
  };
};

export const getHomeStatisticsService = async (params: SearchSuggestParams) => {
  return request<ApiResponse<StatisticsData>>('/v1/statistics', {
    method: 'GET',
    params,
  });
};

export const getDrugInfoService = async (drugId: string) => {
  return request<ApiResponse<DrugInfo>>(`/v1/drug/${drugId}`);
};

export const getDiseaseInfoService = async (diseaseId: string) => {
  return request<ApiResponse<DiseaseFullInfo>>(`/v1/disease/${diseaseId}`);
};

export const getMethodListService = async (params: RequestParams) => {
  const res = await request<ApiResponse<Method[]>>(`/v1/methods`);

  const sortParams = (params?.sort || {}) as Partial<Method>;

  let attr: keyof Method | undefined = undefined;
  let sortOrder: CommonSortOrder = 'ascend';

  Object.keys(sortParams).forEach((key) => {
    const _key = key as keyof Method;
    attr = _key;
    sortOrder = sortParams[_key] as CommonSortOrder;
  });

  res.data = frontSortArray<Method>(res.data, {
    attr,
    sortOrder,
  });

  return res;
};

export const getDatasetListService = async () => {
  return request<ApiResponse<Dataset[]>>(`/v1/datasets`);
};

export const downloadService = async (filePath: string) => {
  return request<Blob>(`/v1/download`, {
    responseType: 'blob',
    params: {
      path: filePath,
    },
  });
};

export const getDownloadFiles = async () => {
  const res = await request<ApiResponse<DownloadNodeData[]>>(
    `/v1/download/files`,
  );

  const _data = traverseDownLoadTree(res.data, (node) => {
    return {
      ...node,
      key: node.path,
    };
  });
  return {
    ...res,
    data: _data,
  };
};
