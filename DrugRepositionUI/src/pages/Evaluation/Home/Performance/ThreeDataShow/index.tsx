import {
  useDeepCompareEffect,
  useEventListener,
  useMemoizedFn,
  useMount,
  useSafeState,
  useUnmount,
} from 'ahooks';
import { Radio, Row } from 'antd';
import * as echarts from 'echarts';
import { ECharts, EChartsOption } from 'echarts';
import 'echarts-gl';
import _ from 'lodash';
import { useMemo, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';

import { VALUE_COLOR_ARRAY } from '@/common';
import { PERFERMENCE_VALUE_TYPE_LIST } from '@/constants';
import { PlatformDataTypeEnum, PlatformDataTypeEnumText } from '@/enums';
import { HomeDatasetData, PerfermenceValueType } from '@/types';

import { gotoDatasetMethodDetail } from '../../common';

import { ToolTip } from '../ToolTip';

import './style.less';

export type ThreeDataShowProps = {
  data?: HomeDatasetData;
};

type ZDataType = [number, number, string | number];

export const ThreeDataShow = (props: ThreeDataShowProps) => {
  const { data } = props;

  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ECharts>();

  const [currentPerfermenceValue, setCurrentPerfermenceValue] = useSafeState(
    PERFERMENCE_VALUE_TYPE_LIST[0].value,
  );

  const initChart = useMemoizedFn(() => {
    if (chartContainerRef.current) {
      chartRef.current = echarts.init(chartContainerRef.current);
    }
  });

  const currentPerfermence = useMemo(() => {
    let result = PERFERMENCE_VALUE_TYPE_LIST.find(
      (item) => item.value === currentPerfermenceValue,
    );
    return result;
  }, [currentPerfermenceValue]);

  const getZData = useMemoizedFn(
    (
      data?: HomeDatasetData,
      valueType: PerfermenceValueType = PERFERMENCE_VALUE_TYPE_LIST[0].value,
    ) => {
      const methodDataset = data?.methods_datasets || [];
      let result: ZDataType[] = [];

      methodDataset.forEach((item) => {
        let xIndex = _.findIndex(
          data?.methods,
          (child) => child === item.method_name,
        );
        let yIndex = _.findIndex(
          data?.datasets,
          (child) => child === item.dataset_name,
        );
        result.push([xIndex, yIndex, item[valueType] || 0]);
      });

      return result;
    },
  );

  const parseValueToMethodDataset = useMemoizedFn(
    (zDataValue: ZDataType, xData: string[], yData: string[]) => {
      const [xIndex, yIndex, value] = zDataValue as ZDataType;
      const methodName = xData[xIndex];
      const dataSetName = yData[yIndex];

      return {
        value,
        methodName,
        dataSetName,
      };
    },
  );

  const setOption = useMemoizedFn(
    (option: { xData: string[]; yData: string[]; zData: ZDataType[] }) => {
      const { xData, yData, zData } = option;
      if (chartRef.current) {
        const chartOption: EChartsOption = {
          tooltip: {
            formatter: (params) => {
              const newParams = params as Record<string, any>;

              const { methodName, dataSetName, value } =
                parseValueToMethodDataset(
                  newParams.value as ZDataType,
                  xData,
                  yData,
                );

              const result = ReactDOMServer.renderToString(
                <ToolTip
                  data={{
                    methodName,
                    dataSetName,
                    type: currentPerfermence?.label,
                    value: value,
                    color: newParams.color,
                  }}
                />,
              );
              return result;
            },
            borderColor: '#fff',
          },
          visualMap: {
            min: Number(_.min(zData.map((item) => item[2]))),
            max: Number(_.max(zData.map((item) => item[2]))),
            top: '20%',
            inRange: {
              color: _.cloneDeep(VALUE_COLOR_ARRAY).reverse(),
            },
          },
          xAxis3D: {
            type: 'category',
            data: xData,
            name: PlatformDataTypeEnumText[PlatformDataTypeEnum.METHOD],
          },
          yAxis3D: {
            type: 'category',
            data: yData,
            name: PlatformDataTypeEnumText[PlatformDataTypeEnum.DATASET],
          },
          zAxis3D: {
            type: 'value',
            name: currentPerfermence?.label,
          },
          grid3D: {
            top: -60,
            boxWidth: 200,
            boxDepth: 80,
            viewControl: {
              distance: 220,
              beta: 10,
              alpha: 2,
            },
            light: {
              main: {
                intensity: 1.2,
                shadow: true,
              },
              ambient: {
                intensity: 0.3,
              },
            },
          },
          view: {
            distance: 800,
          },
          series: [
            {
              type: 'bar3D',
              data: zData.map(function (item) {
                return {
                  value: item,
                };
              }),
              shading: 'lambert',
              label: {
                fontSize: 16,
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  fontSize: 20,
                  color: '#900',
                },
                itemStyle: {
                  color: '#900',
                },
              },
            },
          ],
        };
        chartRef.current.setOption(chartOption);
      }
    },
  );

  useMount(() => {
    initChart();
  });

  useUnmount(() => {
    if (chartRef.current) {
      chartRef.current.dispose();
    }
  });

  useDeepCompareEffect(() => {
    const xData = data?.methods || [];
    const yData = data?.datasets || [];
    const zData = getZData(data, currentPerfermenceValue);

    setOption({
      xData,
      yData,
      zData,
    });

    if (chartRef.current) {
      //  点击图表
      chartRef.current.on('click', (params) => {
        const { methodName, dataSetName } = parseValueToMethodDataset(
          params.value as ZDataType,
          xData,
          yData,
        );
        gotoDatasetMethodDetail(methodName, dataSetName);
      });
    }
  }, [data, currentPerfermenceValue, chartRef.current]);

  useDeepCompareEffect(() => {}, [chartRef.current]);

  useEventListener('resize', () => {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  });

  return (
    <div>
      <Row justify="center">
        <Radio.Group
          options={PERFERMENCE_VALUE_TYPE_LIST}
          value={currentPerfermenceValue}
          optionType="button"
          buttonStyle="solid"
          onChange={(e) => {
            setCurrentPerfermenceValue(e.target.value);
          }}
        />
      </Row>
      <div ref={chartContainerRef} className="auc-chart-container" />
    </div>
  );
};
