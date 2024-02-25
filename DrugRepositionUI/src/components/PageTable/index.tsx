import { ProCard, ProColumns } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { useDeepCompareEffect, useMemoizedFn, useSafeState } from 'ahooks';
import { Tabs, Typography } from 'antd';
import { useMemo } from 'react';

import { isEmpty, jsonToCsv } from '@/common';
import {
  CustomProTable,
  DiseaseItem,
  DownloadButton,
  DrugItem,
} from '@/components';
import { getSearchDataService } from '@/services';
import {
  Dataset,
  Method,
  SearchDatasetMethodData,
  SearchDatasetMethodParams,
} from '@/types';

export type PageTableProps = SearchDatasetMethodParams & {
  methods?: Method[];
  datasets?: Dataset[];
};

export const PageTable = (props: PageTableProps) => {
  const { dataset_name, method_name, methods, datasets } = props;

  const [datasetName, setDatasetName] = useSafeState<string>();
  const [methodName, setMethodName] = useSafeState<string>();

  const [downloadData, setDownloadData] = useSafeState<
    SearchDatasetMethodData[]
  >([]);

  const tabsData =
    methods?.map((item) => item.method_name) ||
    datasets?.map((item) => item.dataset_name) ||
    [];

  const finalTabData = ['ALL', ...tabsData];

  const columns = useMemo<ProColumns<SearchDatasetMethodData>[]>(() => {
    return [
      ...DrugItem.drugCommonColumns,
      ...DiseaseItem.diseaseIdsColumns,
      {
        dataIndex: 'score',
        title: 'Score',
        fixed: 'right',
        align: 'center',
        width: 140,
      },
    ];
  }, []);

  const changeTabKey = useMemoizedFn((tabKey) => {
    const finalTabKey = tabKey === 'ALL' ? undefined : tabKey;

    if (methods?.length) {
      setMethodName(finalTabKey);
    }
    if (datasets?.length) {
      setDatasetName(finalTabKey);
    }
  });

  useDeepCompareEffect(() => {
    setDatasetName(dataset_name);
  }, [dataset_name]);

  useDeepCompareEffect(() => {
    setMethodName(method_name);
  }, [method_name]);

  return (
    <ProCard
      title="Method Predicted Results"
      className="mb-md"
      headerBordered
      tooltip={
        <div>
          The prediction result block only shows the first 100 prediction
          results of the method on each dataset with a prediction score greater
          than 0.5. If you want to get all the results, you can get it on the
          <Typography.Link
            style={{ margin: '0 8px' }}
            onClick={() => {
              history.push('/download');
            }}
          >
            download
          </Typography.Link>
          page.
        </div>
      }
      extra={
        <DownloadButton
          disabled={downloadData.length === 0}
          downloadContent={jsonToCsv(downloadData)}
          downloadFileName={`Method Predicted Results.csv`}
        />
      }
    >
      {tabsData && tabsData.length ? (
        <Tabs
          onChange={changeTabKey}
          items={finalTabData.map((item) => {
            return {
              key: item,
              label: item,
            };
          })}
        />
      ) : null}

      <CustomProTable<SearchDatasetMethodData>
        ghost
        request={async (params) => {
          const res = await getSearchDataService(
            {
              dataset_name: params.dataset_name,
              method_name: params.method_name,
              group_field: !isEmpty(method_name)
                ? 'dataset_name'
                : 'method_name',
            },
            true,
          );
          setDownloadData(res.data);
          return res;
        }}
        params={{
          dataset_name: datasetName,
          method_name: methodName,
        }}
        rowKey={(record) =>
          `${record.drug_name}-${record.drugbank_id}-${record.disease_id}`
        }
        columns={columns}
        options={false}
        search={false}
      />
    </ProCard>
  );
};
