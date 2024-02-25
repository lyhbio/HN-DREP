import { CustomProTable, MethodItem } from '@/components';
import { getMethodListService } from '@/services';
import { Method } from '@/types';
import { useRef } from 'react';

export type MethodTableProps = {
  dataSource?: Method[];
};

export const MethodTable = (props: MethodTableProps) => {
  const { ...more } = props;

  const domRef = useRef<Element | null>();

  return (
    <CustomProTable
      options={{}}
      pagination={false}
      getScrollContainer={(container) => {
        domRef.current = container;
      }}
      request={(params, sort) =>
        getMethodListService({
          ...params,
          sort,
        })
      }
      columns={MethodItem.columns}
      rowKey={(item) => item.method_name}
      {...more}
    />
  );
};
