import { ProColumns } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import classNames from 'classnames';
import _ from 'lodash';
import { useMemo } from 'react';

import {
  getColorByValue,
  getMaxValue,
  getMethodDatasetMapDataSource,
  getMinValue,
  getNumberArrayByAttr,
  getValueEnumTitle,
  isEmpty,
} from '@/common';
import { CustomProTable } from '@/components';
import { AUC_BLANK_PLACEHOLDER } from '@/constants';
import {
  AucAuprF1Enum,
  MemoryEnum,
  MemoryHumanEnum,
  TimeEnum,
  TimeHumanEnum,
} from '@/enums';
import { HomeDatasetData, MethodDataset } from '@/types';

import {
  gotoDatasetDetail,
  gotoDatasetMethodDetail,
  gotoMethodDetail,
} from '../common';

import { Typography } from 'antd';
import './style.less';

export type TableShowProps = {
  data?: HomeDatasetData;
  valueEnum?: TimeEnum | AucAuprF1Enum | MemoryEnum;
  showHeaderTitle?: boolean;
};

type MethodDatasetType = {
  method_name: string;
  [key: string]: any;
};

export const TableShow = (props: TableShowProps) => {
  const { data, valueEnum = AucAuprF1Enum, showHeaderTitle = true } = props;

  const valueArray = Object.values(valueEnum);


  const getCommonCell = useMemoizedFn(
    (currentValue, key: keyof MethodDataset) => {
      const numberArray = getNumberArrayByAttr(data, key);
      const maxValue = getMaxValue(numberArray);
      const minValue = getMinValue(numberArray);
      return {
        className: 'custom-cell',
        style: {
          backgroundColor: getColorByValue(currentValue, maxValue, minValue),
        },
      };
    },
  );

  const columns = useMemo<ProColumns[]>(() => {
    let datasetArray: ProColumns[] = [];

    if (data?.datasets.length) {
      datasetArray = data?.datasets?.map((datasetName) => {
        return {
          dataIndex: 'dataset_name',
          title: <Typography.Link>{datasetName}</Typography.Link>,
          key: datasetName,
          children: valueArray.map((item) => {
            const newItem = item as TimeEnum | AucAuprF1Enum | MemoryEnum;
            return {
              title: getValueEnumTitle(newItem, valueEnum),
              dataIndex: `${datasetName}-${item}`,
              align: 'center',
              width: 110,
              onCell(record) {
                const value = record[`${datasetName}-${item}`];
                const _item = item as keyof MethodDataset;
                return getCommonCell(value, _item);
              },
              render(text, record) {
                let finalText = text;
                if (
                  _.isEqual(Object.values(valueEnum), Object.values(TimeEnum))
                ) {
                  const newItem = item as TimeEnum;
                  let _newItemIndex = `${datasetName}-${TimeHumanEnum[newItem]}`;
                  finalText = record[_newItemIndex];
                }

                if (
                  _.isEqual(Object.values(valueEnum), Object.values(MemoryEnum))
                ) {
                  const newItem = item as MemoryEnum;
                  let _newItemIndex = `${datasetName}-${MemoryHumanEnum[newItem]}`;
                  finalText = record[_newItemIndex];
                }
                return (
                  <div
                    id={`${record.method_name}-link-${datasetName}`}
                    className="custom-cell-render"
                  >
                    {!isEmpty(finalText) ? finalText : AUC_BLANK_PLACEHOLDER}
                  </div>
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
          return {
            className: 'custom-method-cell',
          };
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
  }, [data?.datasets, getCommonCell, valueArray, valueEnum]);

  return (
    <>
      <CustomProTable<MethodDatasetType>
        className={classNames(
          'table-show-container',
          valueArray.length <= 1 ? 'hide-table-children-table-container' : '',
        )}
        columns={columns}
        options={false}
        bordered
        ghost
        rowKey={(item) => {
          return JSON.stringify(item);
        }}
        dataSource={getMethodDatasetMapDataSource(valueEnum, data)}
        pagination={false}
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
            },
          };
        }}
      />
      {showHeaderTitle ? (
        <Typography.Text>{}EMPTY_DESCRIPTION</Typography.Text>
      ) : null}
    </>
  );
};
