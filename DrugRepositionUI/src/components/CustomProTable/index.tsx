import {
  ParamsType,
  ProTable,
  ProTableProps,
} from '@ant-design/pro-components';
import {
  useDebounceFn,
  useDeepCompareEffect,
  useEventListener,
  useSafeState,
} from 'ahooks';
import classnames from 'classnames';
import _ from 'lodash';
import { useEffect, useRef } from 'react';

export type CustomProTableProps<
  DataSource,
  U,
  ValueType = 'text',
> = ProTableProps<DataSource, U, ValueType>;

export const CustomProTable = <
  T extends Record<string, any>,
  U extends ParamsType = ParamsType,
  ValueType = 'text',
>(
  props: CustomProTableProps<T, U, ValueType> & {
    customSticky?: boolean;
    getScrollContainer?: (element?: Element | null) => void;
  },
) => {
  const {
    className,
    scroll = {},
    getScrollContainer,
    dataSource,
    customSticky = false,
    ...more
  } = props;

  const tableRef = useRef<HTMLDivElement>(null);

  const [tableBodyHeight, setTableBodyHeight] = useSafeState(0);

  const { run: getBodyHeight } = useDebounceFn(
    () => {
      const tableContainer = tableRef.current;

      const tableBody = tableContainer?.querySelector(
        '.custom-pro-table-container .ant-table-body',
      );

      const tablePage = tableContainer?.querySelector(
        '.custom-pro-table-container .ant-pagination-total-text',
      );

      const tablePageHeight = tablePage ? tablePage.clientHeight + 16 : 0;

      const extraHeight = 90;

      if (_.isFunction(getScrollContainer)) {
        getScrollContainer(tableBody);
      }
      if (tableBody) {
        const { top } = tableBody?.getBoundingClientRect();

        const viewHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const tableBodyHeight =
          viewHeight - top - 56 - tablePageHeight - extraHeight;

        setTableBodyHeight(tableBodyHeight);
      }
    },
    {
      wait: 100,
    },
  );

  useEventListener('resize', () => {
    getBodyHeight();
  });

  useEffect(() => {
    getBodyHeight();
  }, [getBodyHeight]);

  useDeepCompareEffect(() => {
    getBodyHeight();
  }, [dataSource]);

  return (
    <div ref={tableRef}>
      <ProTable
        className={classnames('custom-pro-table-container', className)}
        search={false}
        options={false}
        ghost
        dataSource={dataSource}
        {...more}
        onLoad={() => {
          getBodyHeight();
        }}
        scroll={{
          x: 'max-content',
          y: customSticky ? tableBodyHeight : 'auto',
          ...scroll,
        }}
      />
    </div>
  );
};
