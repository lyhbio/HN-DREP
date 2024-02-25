import {
  ProColumns,
  ProDescriptionsItemProps,
  ProDescriptionsProps,
} from '@ant-design/pro-components';
import { Progress, Typography } from 'antd';
import _, { isEqual } from 'lodash';

import { BLANK_PLACEHOLDER } from '@/constants';
import {
  AucAuprF1Enum,
  AucAuprF1EnumText,
  EvalutionTypeEnum,
  EvalutionTypeEnumText,
  MemoryEnum,
  MemoryHumanEnum,
  TimeEnum,
  TimeHumanEnum,
} from '@/enums';
import {
  CommonSortOrder,
  DownloadNodeData,
  HomeDatasetData,
  MethodDataset,
  MethodDatasetType,
} from '@/types';

export function isInViewPort(element: HTMLElement) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const { top, right, bottom, left } = element.getBoundingClientRect();
  return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;
}

export function isEmpty(value: any) {
  return (
    _.isNil(value) ||
    value === '0' ||
    value === '' ||
    value === '无' ||
    value === BLANK_PLACEHOLDER ||
    _.isEmpty(value)
  );
}

export const VALUE_COLOR_ARRAY = [
  '#d73027',
  '#f46d43',
  '#ffbbbf',
  '#fdae61',
  '#fee090',
  '#e0f3f8',
  '#abd9e9',
  '#74add1',
  '#313695',
  '#4575b4',
];

export const getNumberArrayByAttr = (
  data: HomeDatasetData,
  attr: keyof MethodDataset,
) => {
  const result = data?.methods_datasets.map((item) => item[attr]) || [];
  return result;
};
export const getMaxValue = (numberArray: string[]) => {
  const _numberArray = numberArray.map((item) => Number(item));
  return Math.max(..._numberArray);
};
export const getMinValue = (numberArray: string[]) => {
  const _numberArray = numberArray.map((item) => Number(item));
  return Math.min(..._numberArray);
};

export function getColorByValue(
  value: number,
  minValue = 0,
  maxValue = 1,
): string {
  const colorArray = VALUE_COLOR_ARRAY;
  const colorCount = colorArray.length;
  const valueRangeLength = maxValue - minValue;
  const interval = valueRangeLength / colorCount;

  const index = Math.floor((value - minValue) / interval);

  if (isEmpty(value)) {
    return 'rgba(0, 0,0,0.8)';
  } else if (index < 0) {
    return colorArray[0];
  } else if (index >= colorCount - 1) {
    return colorArray[colorCount - 1];
  } else {
    return colorArray[index];
  }
}

export function getEvalutionTypeColumns() {
  let evalutionTypeColumns: ProColumns[] = [];

  evalutionTypeColumns = Object.keys(EvalutionTypeEnumText).map((key) => {
    const newKey = key as EvalutionTypeEnum;
    return {
      dataIndex: newKey,
      title: EvalutionTypeEnumText[newKey],
      width: 270,
      sorter: true,
      defaultSortOrder:
        newKey === EvalutionTypeEnum['OVERALL'] ? 'descend' : null,
      render(text) {
        return (
          <Progress
            steps={10}
            size={15}
            percent={Number(text) * 100}
            format={() => text}
          />
        );
      },
    };
  });

  return evalutionTypeColumns;
}

export function downloadFile(text: any, filename: string) {
  const eleLink = document.createElement('a');
  eleLink.download = filename;
  eleLink.style.display = 'none';
  // 将内容转为 blob
  const blob = new Blob([text]);
  eleLink.href = URL.createObjectURL(blob);
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}

export function jsonToCsv(jsonData: Record<string, any>) {
  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    return '';
  }

  const keys = Object.keys(jsonData[0]);

  // 生成 CSV 头部
  const header = keys.join(',') + '\n';

  // 生成 CSV 行数据
  const rows = jsonData
    .map((item) => {
      return keys
        .map((key) => {
          let value = item[key];

          // 处理值中的引号和逗号
          if (typeof value === 'string') {
            value = value.replace(/"/g, '""');
            if (value.includes(',') || value.includes('"')) {
              value = `"${value}"`;
            }
          }

          return value;
        })
        .join(',');
    })
    .join('\n');

  return header + rows;
}

export function dealDescriptionColumns<TData extends any>(
  columns: ProDescriptionsProps<TData>['columns'],
  baseInfo?: TData,
) {
  let result = columns?.map((item) => {
    const _render: ProDescriptionsItemProps<TData>['render'] = (
      text,
      row,
      ...more
    ) => {
      const finalText = (
        _.isFunction(item.render) ? (
          item.render(text, row, ...more)
        ) : (
          <span>{text}</span>
        )
      ) as React.ReactNode;

      const result = (
        <Typography.Paragraph
          ellipsis={{ rows: 20, expandable: !_.isFunction(item.render) }}
        >
          {finalText || BLANK_PLACEHOLDER}
        </Typography.Paragraph>
      );
      return result;
    };
    const newItem = {
      ...item,
      render: _render,
    };
    return newItem;
  });

  return baseInfo && !isEmpty(baseInfo)
    ? result?.filter((item) => {
        const dataIndex = item.dataIndex as keyof TData;
        return !isEmpty(baseInfo[dataIndex]);
      })
    : result;
}

export const getMethodDatasetMapDataSource = (
  valueEnum: any,
  data?: HomeDatasetData,
) => {
  const methodNames = data?.methods || [];
  const datasetsNames = data?.datasets || [];
  const methodDataset = data?.methods_datasets || [];
  const result: MethodDatasetType[] = [];

  const valueArray = Object.values(valueEnum);
  let _valueArray = valueArray;

  if (isEqual(Object.values(valueEnum), Object.values(TimeEnum))) {
    _valueArray = _valueArray.concat(Object.values(TimeHumanEnum));
  }
  if (isEqual(Object.values(valueEnum), Object.values(MemoryEnum))) {
    _valueArray = _valueArray.concat(Object.values(MemoryHumanEnum));
  }

  methodNames.forEach((methodName) => {
    let currentMethodMap = methodDataset.filter(
      (item) => item.method_name === methodName,
    );
    let methodDatasetObj: Record<string, any> = {};

    datasetsNames.forEach((datasetName) => {
      let currentDatasetMethodMap = currentMethodMap.find(
        (item) => item.dataset_name === datasetName,
      );

      _valueArray.forEach((key) => {
        const _key = key as keyof MethodDataset;
        let newKey = `${datasetName}-${key}`;
        methodDatasetObj[newKey] = currentDatasetMethodMap
          ? currentDatasetMethodMap[_key]
          : '';
      });
    });

    result.push({
      method_name: methodName,
      ...methodDatasetObj,
    });
  });

  result.sort();

  return result;
};

export const getValueEnumTitle = (
  item: TimeEnum | AucAuprF1Enum | MemoryEnum,
  valueEnum: any,
) => {
  let title = '';

  if (_.isEqual(Object.values(valueEnum), Object.values(TimeEnum))) {
    const newItem = item as TimeEnum;
    title = TimeHumanEnum[newItem];
  }

  if (_.isEqual(Object.values(valueEnum), Object.values(MemoryEnum))) {
    const newItem = item as MemoryEnum;
    title = MemoryHumanEnum[newItem];
  }

  if (_.isEqual(Object.values(valueEnum), Object.values(AucAuprF1Enum))) {
    const newItem = item as AucAuprF1Enum;
    title = AucAuprF1EnumText[newItem];
  }

  return title;
};

export function frontSortArray<T>(
  data: T[],
  options: {
    attr?: keyof T;
    sortOrder?: CommonSortOrder;
  } = {
    sortOrder: 'ascend',
  },
): T[] {
  const { attr, sortOrder } = options;
  const _data = _.cloneDeep(data);
  return _data.sort((a, b) => {
    let result = 0;
    switch (sortOrder) {
      case 'ascend':
        if (attr) {
          result = Number(a[attr]) - Number(b[attr]);
        } else {
          result = Number(a) - Number(b);
        }
        break;
      case 'descend':
        if (attr) {
          result = Number(b[attr]) - Number(a[attr]);
        } else {
          result = Number(b) - Number(a);
        }
        break;
      default:
        break;
    }
    return result;
  });
}

export function filterEmptyValues(
  obj: Record<string, any> = {},
): Record<string, any> {
  const filteredObj: Record<string, any> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (_.isObject(value) && !isEmpty(value)) {
      const nestedFilteredObj = filterEmptyValues(value);
      if (Object.keys(nestedFilteredObj).length > 0) {
        filteredObj[key] = nestedFilteredObj;
      }
    } else if (!isEmpty(value)) {
      filteredObj[key] = value;
    }
  }

  return filteredObj;
}

export function convertBytesToKBMBGB(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  } else if (bytes < 1024 * 1024) {
    const kb = bytes / 1024;
    return `${kb.toFixed(2)} KB`;
  } else if (bytes < 1024 * 1024 * 1024) {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  } else {
    const gb = bytes / (1024 * 1024 * 1024);
    return `${gb.toFixed(2)} GB`;
  }
}

export function traverseDownLoadTree(
  nodes: DownloadNodeData[],
  callback: (node: DownloadNodeData) => DownloadNodeData,
) {
  const _node = nodes.map((node) => {
    const _node = _.isFunction(callback) ? callback(node) : node;
    if (_node.children) {
      _node.children = traverseDownLoadTree(_node.children, callback);
    }
    return _node;
  });

  return _node;
}

export function splitProDescriptionText(text: any) {
  const _text = text as string;
  const textArray = _.unionBy(_text?.split('|'));
  return !isEmpty(text)
    ? textArray.map((item, index) => {
        return (
          <Typography.Text key={item}>
            <span> {item}</span>
            {index < textArray.length - 1 ? (
              <span style={{ margin: '0 4px' }}>|</span>
            ) : null}
          </Typography.Text>
        );
      })
    : BLANK_PLACEHOLDER;
}
