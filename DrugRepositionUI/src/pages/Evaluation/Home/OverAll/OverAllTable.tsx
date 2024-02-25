import { ProColumns } from '@ant-design/pro-components';
import { useMemo } from 'react';

import { getEvalutionTypeColumns } from '@/common';
import { CustomProTable, MethodItem } from '@/components';
import { getMethodListService } from '@/services';
import { Method } from '@/types';

export const OverAllTable = () => {
  const methodNameColumns = MethodItem.columns.filter(
    (item) => item.dataIndex === 'method_name',
  );

  const columns = useMemo<ProColumns[]>(() => {
    return [...methodNameColumns, ...getEvalutionTypeColumns()];
  }, [methodNameColumns]);

  return (
    <CustomProTable<Method>
      
      columns={columns}
      request={(params, sort) => getMethodListService({
        ...params,
        sort,
      })}
      rowKey={(item) => item.method_name}
      options={false}
      pagination={{ pageSize: 22 }}
    />
  );
};
