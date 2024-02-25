import {
  ProColumns,
  ProDescriptions,
  ProDescriptionsProps,
} from '@ant-design/pro-components';

import { isEmpty } from '@/common';
import { AucAuprItem, MemoryTimeItem, RefId } from '@/components';
import { COMMON_COLUMN } from '@/constants';
import { getDatasetService } from '@/services';
import { Dataset, Method } from '@/types';
import { useDeepCompareEffect, useMemoizedFn, useSafeState } from 'ahooks';
import { Typography } from 'antd';

export type DatasetItemProps = ProDescriptionsProps & {
  dataSource?: Dataset & Partial<Method>;
  showAucApr?: boolean;
  showMemoryTime?: boolean;
  datasetName?: string;
};

const columns: ProColumns<Dataset>[] = [
  {
    dataIndex: 'dataset_name',
    title: 'Dataset Name',
    width: 140,
    render(text) {
      return text ? (
        <Typography.Link
          href={`evaluation/dataset-detail?dataset_name=${text}`}
        >
          {text}
        </Typography.Link>
      ) : (
        text
      );
    },
  },
  {
    dataIndex: 'drug_num',
    title: 'Numbers of drug',
    width: 140,
  },
  {
    dataIndex: 'disease_num',
    title: 'Numbers of disease',
    width: 140,
  },
  {
    dataIndex: 'drug_disease_associations',
    title: 'Numbers of drug-disease associations',
    width: 320,
  },
  {
    dataIndex: 'dois',
    title: 'Dois',
    width: 240,
    render(text, record) {
      return (
        <RefId
          refAttr="dois"
          value={record?.ref_id}
          refDataSource={record?.references}
        />
      );
    },
  },
];

export const DatasetItem = (props: DatasetItemProps) => {
  const {
    dataSource,
    showAucApr = false,
    showMemoryTime = false,
    datasetName,
    ...rest
  } = props;

  const [stateData, setStateData] = useSafeState<Dataset & Partial<Method>>();
  const [loading, setLoading] = useSafeState(false);

  const getDatasetInfo = useMemoizedFn(async (currentName?: string) => {
    if (currentName) {
      setLoading(true);
      const { data } = await getDatasetService({
        dataset_name: currentName,
      });
      setStateData(data);
      setLoading(false);
    }
  });

  useDeepCompareEffect(() => {
    if (!isEmpty(dataSource)) {
      setStateData(dataSource);
    } else if (!isEmpty(datasetName)) {
      getDatasetInfo(datasetName);
    }
  }, [dataSource, datasetName]);

  return (
    <>
      <ProDescriptions
        size="small"
        column={COMMON_COLUMN}
        dataSource={stateData}
        loading={loading}
        bordered
        columns={columns as ProDescriptionsProps['columns']}
        {...rest}
      />

     

      {showAucApr ? <AucAuprItem dataSource={dataSource} /> : null}
      {showMemoryTime ? <MemoryTimeItem dataSource={dataSource} /> : null}

      
    </>
  );
};

DatasetItem.columns = columns;
