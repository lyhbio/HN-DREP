import {
  ProColumns,
  ProDescriptions,
  ProDescriptionsProps,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { useDeepCompareEffect, useSafeState } from 'ahooks';
import { Space, Typography } from 'antd';
import _ from 'lodash';

import {
  dealDescriptionColumns,
  isEmpty,
  splitProDescriptionText,
} from '@/common';
import { BLANK_PLACEHOLDER, COMMON_COLUMN } from '@/constants';
import { PredictTypeEnum } from '@/enums';
import { getDiseaseInfoService, getDiseaseNames } from '@/services';
import { DiseaseInfo } from '@/types';

export type DiseaseItemProps = {
  dataSource?: DiseaseInfo;
  diseaseId?: string;
  diseaseName?: string;
};

function getDiseaseIdUrl(value: string, disease_from?: string) {
  let result = '';
  switch (disease_from) {
    case 'omim':
      result = `https://www.omim.org/entry/${value}`;
      break;
    case 'mesh':
      result = `https://www.ncbi.nlm.nih.gov/mesh/?term=${value}`;
      break;
    case 'do':
      result = `https://disease-ontology.org/?id=${value}`;
      break;
    case 'medgen':
      result = `https://www.ncbi.nlm.nih.gov/medgen/?term=${value}`;
      break;
  }
  return result;
}

const diseaseNameColumn = {
  dataIndex: 'disease_name',
  title: 'Disease Name',
  width: 300,
  render(text, record) {
    const _text = record['disease_name'] || record['name'];
    const _id = record.disease_id || record.id;
    return (
      <Typography.Link
        onClick={() => {
          history.push(
            `/predict/detail?type=${PredictTypeEnum.disease}&id=${_id}&name=${_text}`,
          );
        }}
      >
        {_text}
      </Typography.Link>
    );
  },
};

const diseaseIdColumn = {
  dataIndex: 'disease_id',
  title: 'Disease ID',
  width: 200,
  render(text, record: DiseaseInfo) {
    const disease_from = record.disease_from;
    const url = getDiseaseIdUrl(record.disease_id || '', disease_from);

    return (
      <Typography.Link key={text} href={url} target="_blank">
        {text}
      </Typography.Link>
    );
  },
};

const diseaseFromColumn = {
  dataIndex: 'disease_from',
  title: 'Disease From',
  width: 200,
};

const diseaseIdNameColumns = [
  diseaseNameColumn,
  diseaseIdColumn,
  diseaseFromColumn,
];

const diseaseIdsColumns = [
  diseaseNameColumn,
  {
    dataIndex: 'omim_id',
    title: 'OMIM ID',
    width: 200,
    render(text) {
      const _text = text as string;
      const textArray = _.unionBy(_text?.split('|'));
      return !isEmpty(text) ? (
        <Space wrap>
          {textArray.map((item) => {
            return (
              <Typography.Link
                key={item}
                href={`https://www.omim.org/entry/${item}`}
                target="_blank"
              >
                {item}
              </Typography.Link>
            );
          })}
        </Space>
      ) : (
        BLANK_PLACEHOLDER
      );
    },
  },
  {
    dataIndex: 'mesh_id',
    title: 'MeSH ID',
    width: 200,
    render(text) {
      const _text = text as string;
      const textArray = _.unionBy(_text?.split('|'));
      return !isEmpty(text) ? (
        <Space wrap>
          {textArray.map((item) => {
            return (
              <Typography.Link
                key={item}
                href={`https://www.ncbi.nlm.nih.gov/mesh/?term=${item}`}
                target="_blank"
              >
                {item}
              </Typography.Link>
            );
          })}
        </Space>
      ) : (
        BLANK_PLACEHOLDER
      );
    },
  },
  {
    dataIndex: 'do_id',
    title: 'DO ID',
    width: 200,
    render(text) {
      const _text = text as string;
      const textArray = _.unionBy(_text?.split('|'));
      return !isEmpty(text) ? (
        <Space wrap>
          {textArray.map((item) => {
            return (
              <Typography.Link
                key={item}
                href={`https://disease-ontology.org/?id=${item}`}
                target="_blank"
              >
                {item}
              </Typography.Link>
            );
          })}
        </Space>
      ) : (
        BLANK_PLACEHOLDER
      );
    },
  },
  {
    dataIndex: 'medgen_id',
    title: 'MedGen ID',
    width: 200,
    render(text, record) {
      let _text: string = record['medgen_id'];
      if (record['disease_from'] === 'medgen') {
        _text = record['disease_id'];
      }
      const textArray = _.unionBy(_text?.split('|'));
      return !isEmpty(_text) ? (
        <Space wrap>
          {textArray.map((item) => {
            return (
              <Typography.Link
                key={item}
                href={`https://www.ncbi.nlm.nih.gov/medgen/?term=${item}`}
                target="_blank"
              >
                {item}
              </Typography.Link>
            );
          })}
        </Space>
      ) : (
        BLANK_PLACEHOLDER
      );
    },
  },
];

const columns: ProColumns<DiseaseInfo>[] = [
  ...diseaseIdsColumns,
  {
    dataIndex: 'synonyms',
    title: 'Synonyms',
    render(text) {
      return splitProDescriptionText(text);
    },
  },
  {
    dataIndex: 'slimmappings',
    title: 'Slimmappings',
    render(text) {
      return splitProDescriptionText(text);
    },
  },
  {
    dataIndex: 'definition',
    title: 'Definition',
    render(text) {
      return splitProDescriptionText(text);
    },
  },
];

export const DiseaseItem = (props: DiseaseItemProps) => {
  const { dataSource, diseaseId, diseaseName } = props;

  const [diseaseInfo, setDiseaseInfo] = useSafeState<DiseaseInfo>();
  const [loading, setLoading] = useSafeState(false);

  const getDiseaseInfo = async (diseaseId: string) => {
    setLoading(true);
    const { data } = await getDiseaseInfoService(diseaseId);
    setDiseaseInfo(data);
    setLoading(false);
  };

  const getDiseaseInfoByDiseaseName = async (diseaseName: string) => {
    setLoading(true);
    const data = diseaseName
      ? await getDiseaseNames<Partial<DiseaseInfo>>([
          {
            disease_name: diseaseName,
          },
        ])
      : [];
    if (data.length) {
      setDiseaseInfo(data[0]);
    }
    setLoading(false);
  };

  useDeepCompareEffect(() => {
    setDiseaseInfo(dataSource);
  }, [props.dataSource]);

  useDeepCompareEffect(() => {
    if (diseaseId) {
      getDiseaseInfo(diseaseId);
    }
  }, [diseaseId]);

  useDeepCompareEffect(() => {
    if (diseaseName) {
      getDiseaseInfoByDiseaseName(diseaseName);
    }
  }, [diseaseName]);

  return (
    <ProDescriptions
      loading={loading}
      size="small"
      column={COMMON_COLUMN}
      dataSource={diseaseInfo}
      bordered
      columns={dealDescriptionColumns<DiseaseInfo>(
        columns as ProDescriptionsProps<DiseaseInfo>['columns'],
        diseaseInfo,
      )}
    />
  );
};

DiseaseItem.columns = columns;
DiseaseItem.diseaseNameColumn = diseaseNameColumn;
DiseaseItem.diseaseIdColumn = diseaseIdColumn;
DiseaseItem.diseaseIdsColumns = diseaseIdsColumns;
DiseaseItem.diseaseIdNameColumns = diseaseIdNameColumns;
