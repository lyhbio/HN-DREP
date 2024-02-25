import { ProCard } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { useSafeState } from 'ahooks';

import { HomeDatasetData } from '@/types';

import { ShapeValue } from '@/components';
import { useSearchParams } from '@umijs/max';
import { Space } from 'antd';
import { TableShow } from '../TableShow';
import { ShapeShow } from './ShapeShow';
import { ThreeDataShow } from './ThreeDataShow';

export type PerformanceProps = {
  data?: HomeDatasetData;
};

export const Performance = (props: PerformanceProps) => {
  const { data: homeData } = props;
  const [searchParams] = useSearchParams();
  const defaultEvalutionType = searchParams.get('performanceKey') || 'tabShow';

  const [currentTabKey, setCurrentTabKey] = useSafeState(defaultEvalutionType);

  const getTabBarExtraContent = (tabKey: string) => {
    let result = undefined;
    switch (tabKey) {
      case 'tabShow':
        result = (
          <Space size="large">
            <ShapeValue.Bar isReverse />
            <ShapeValue.NA />
          </Space>
        );
        break;
      case 'shapeShow':
        result = <ShapeValue.Group />;
        break;
    }
    return result;
  };

  return (
    <ProCard
      className="no-padding-card"
      tabs={{
        activeKey: currentTabKey,
        tabBarExtraContent: getTabBarExtraContent(currentTabKey),
        items: [
          {
            key: 'tabShow',
            label: `TableShow`,
            children: <TableShow data={homeData} />,
          },
          {
            key: 'shapeShow',
            label: `ShapeShow`,
            children: <ShapeShow data={homeData} />,
          },
          {
            key: '3dShow',
            label: `3DShow`,
            children: <ThreeDataShow data={homeData} />,
          },
        ],
        onChange(key) {
          history.push(`/evaluation?tabKey=performance&performanceKey=${key}`);
          setCurrentTabKey(key);
        },
      }}
    />
  );
};
