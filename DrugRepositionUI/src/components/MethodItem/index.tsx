import {
  ProColumns,
  ProDescriptions,
  ProDescriptionsProps,
} from '@ant-design/pro-components';
import { useDeepCompareEffect, useMemoizedFn, useSafeState } from 'ahooks';
import { Typography } from 'antd';
import { useMemo } from 'react';

import { getEvalutionTypeColumns, isEmpty } from '@/common';
import { AucAuprItem, CustomImage, MemoryTimeItem, RefId } from '@/components';
import { BLANK_PLACEHOLDER, COMMON_COLUMN } from '@/constants';
import { EvalutionTypeEnum } from '@/enums';
import { getMethodService } from '@/services';
import { Method } from '@/types';

export type MethodItemProps = ProDescriptionsProps & {
  dataSource?: Method;
  showAucApr?: boolean;
  hideEvalutionData?: boolean;
  showMemoryTime?: boolean;
  methodName?: string;
  imageTargetRef?: Element;
};

const columns: ProColumns<Method>[] = [
  {
    dataIndex: 'method_name',
    title: 'Method Name',
    fixed: 'left',
    width: 120,
    render(text) {
      return text ? (
        <Typography.Link href={`/evaluation/method-detail?method_name=${text}`}>
          {text}
        </Typography.Link>
      ) : (
        BLANK_PLACEHOLDER
      );
    },
  },
  {
    dataIndex: 'languages',
    title: 'Languages',
    width: 140,
  },
  {
    dataIndex: 'category',
    title: 'Category',
    width: 140,
  },
  {
    dataIndex: 'algorithms',
    title: 'Algorithms',
    width: 140,
  },

  {
    dataIndex: 'network',
    title: 'Network',
    width: 100,
  },
  ...getEvalutionTypeColumns(),
  {
    dataIndex: 'code_address',
    title: 'Code Address',
    width: 140,
    render(text, record) {
      return (
        <Typography.Link
          style={{ width: '240px' }}
          href={record.code_address}
          target="_blank"
        >
          {record.code_address}
        </Typography.Link>
      );
    },
  },
  {
    dataIndex: 'description',
    title: 'Description',
    width: 200,
  },
  {
    dataIndex: 'dataset_used',
    title: 'Dataset Used In Paper',
    width: 140,
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
  {
    dataIndex: 'workflow',
    title: 'Workflow',
    fixed: 'right',
    render(text, record) {
      return <CustomImage src={record.workflow} />;
    },
  },
];

export const MethodItem = (props: MethodItemProps) => {
  const {
    dataSource,
    showAucApr = false,
    showMemoryTime = false,
    hideEvalutionData = false,
    methodName,
    ...more
  } = props;

  const [stateData, setStateData] = useSafeState<Method>();
  const [loading, setLoading] = useSafeState(false);

  const hideColumnsDataIndex = Object.values(EvalutionTypeEnum);

  const finalColumns = useMemo(() => {
    let result = columns;
    if (hideEvalutionData) {
      result = columns.filter(
        (item) => !hideColumnsDataIndex.includes(item.dataIndex),
      );
    }
    return result;
  }, [hideColumnsDataIndex, hideEvalutionData]);

  const getMethodInfo = useMemoizedFn(async (currentMethodName?: string) => {
    if (currentMethodName) {
      setLoading(true);
      const { data } = await getMethodService({
        method_name: currentMethodName,
      });
      setStateData(data);
      setLoading(false);
    }
  });

  useDeepCompareEffect(() => {
    if (!isEmpty(dataSource)) {
      setStateData(dataSource);
    } else if (!isEmpty(methodName)) {
      getMethodInfo(methodName);
    }
  }, [dataSource, methodName]);

  return (
    <>
      <ProDescriptions
        bordered
        size="small"
        loading={loading}
        column={COMMON_COLUMN}
        dataSource={stateData}
        columns={finalColumns as ProDescriptionsProps['columns']}
        {...more}
      />
      {showAucApr ? <AucAuprItem dataSource={dataSource} /> : null}
      {showMemoryTime ? <MemoryTimeItem dataSource={dataSource} /> : null}
    </>
  );
};

MethodItem.columns = columns;
