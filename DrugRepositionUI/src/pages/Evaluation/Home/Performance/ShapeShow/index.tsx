import { ProColumns } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import _ from 'lodash';
import { useMemo } from 'react';

import { CustomProTable, ShapeValue } from '@/components';
import { HomeDatasetData } from '@/types';

import {
  getColorByValue,
  getMaxValue,
  getMethodDatasetMapDataSource,
  getMinValue,
  getNumberArrayByAttr,
  getValueEnumTitle,
} from '@/common';

import {
  gotoDatasetDetail,
  gotoDatasetMethodDetail,
  gotoMethodDetail,
} from '../../common';

import { AucAuprF1Enum } from '@/enums';
import { Typography } from 'antd';
import './style.less';

export type TableShowProps = {
  data?: HomeDatasetData;
};

type MethodDatasetType = {
  method_name: string;
  [key: string]: any;
};

export const ShapeShow = (props: TableShowProps) => {
  const { data } = props;

  const getCommonCell = useMemoizedFn(() => {
    return {
      className: 'custom-cell',
    };
  });

  const columns = useMemo<ProColumns[]>(() => {
    let datasetArray: ProColumns[] = [];

    if (data?.datasets.length) {
      datasetArray = data?.datasets?.map((datasetName) => {
        return {
          dataIndex: 'dataset_name',
          title: <Typography.Link>{datasetName}</Typography.Link>,
          key: datasetName,
          children: Object.values(AucAuprF1Enum).map((item) => {
            const newItem = item as AucAuprF1Enum;
            return {
              title: getValueEnumTitle(newItem, AucAuprF1Enum),
              dataIndex: `${datasetName}-auc`,
              align: 'center',
              width: 70,
              onCell() {
                return getCommonCell();
              },
              render(text, record) {
                const value = record[`${datasetName}-${newItem}`];
                const numberArray = getNumberArrayByAttr(data, newItem);
                const maxValue = getMaxValue(numberArray);
                const minValue = getMinValue(numberArray);
                return (
                  <span
                    id={`${record.method_name}-link-${datasetName}`}
                    className="custom-cell-render"
                  >
                    <ShapeValue
                      key={`${record.method_name}-link-${datasetName}`}
                      value={value}
                      color={getColorByValue(value, maxValue, minValue)}
                      id={`${record.method_name}-link-${datasetName}`}
                    />
                  </span>
                );
              },
            };
          }),
        };
      });
    }

    return [
      {
        dataIndex: 'method_name',
        title: 'Method Name',
        width: 120,
        fixed: 'left',
        align: 'center',
        onCell() {
          return getCommonCell();
        },
        render(text, record) {
          return (
            <Typography.Link id={`${record.method_name}`}>
              {text}
            </Typography.Link>
          );
        },
      },
      ...datasetArray,
    ];
  }, [data, getCommonCell]);

  return (
    <CustomProTable<MethodDatasetType>
      className="shape-show-container"
      columns={columns}
      options={false}
      bordered
      rowKey={(item) => `${item.dataset_name}-${item.method_name}`}
      dataSource={getMethodDatasetMapDataSource(AucAuprF1Enum, data)}
      pagination={{
        pageSize: 22,
      }}
      scroll={{ x: 1800 }}
      search={false}
      defaultSize="middle"
      onHeaderRow={() => {
        return {
          onClick: (e) => {
            const element = e.target as HTMLElement;
            const currentTextValue = element.innerText;
            const finalDatasetName = data?.datasets.find(
              (datasetName) => datasetName === currentTextValue,
            );
            if (finalDatasetName) {
              gotoDatasetDetail(finalDatasetName);
            }
          },
        };
      }}
      onRow={() => {
        return {
          style: {
            cursor: 'pointer',
          },
          onClick(e) {
            const element = e.target as HTMLElement;

            const datasetMethod = _.split(element.id, '-link-');

            if (datasetMethod.length) {
              const [methodName, datasetName] = datasetMethod;

              if (datasetName) {
                gotoDatasetMethodDetail(methodName, datasetName);
              } else if (methodName) {
                gotoMethodDetail(methodName);
              }
            }
            console.log(element.id);
          },
        };
      }}
    />
  );
};
