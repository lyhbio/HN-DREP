import { PageContainer, ProCard } from '@ant-design/pro-components';
import { history, useSearchParams } from '@umijs/max';
import { useSafeState } from 'ahooks';
import { Tabs } from 'antd';

import { DatasetTable, MethodTable } from '@/components';
import { PlatformDataTypeEnum, PlatformDataTypeEnumText } from '@/enums';

import './style.less';

export default () => {
  const [searchParams] = useSearchParams();
  const defaultEvalutionType =
    (searchParams.get('tabKey') as PlatformDataTypeEnum) ||
    PlatformDataTypeEnum.METHOD;

  const [platformType, setPlatformType] =
    useSafeState<PlatformDataTypeEnum>(defaultEvalutionType);

  const platformTypeComponent: Record<PlatformDataTypeEnum, React.ReactNode> = {
    [PlatformDataTypeEnum.DATASET]: <DatasetTable />,
    [PlatformDataTypeEnum.METHOD]: <MethodTable />,
  };

  return (
    <PageContainer
      className="browse-container"
      subTitle="View the used methods and datasets"
      ghost
    >
      <ProCard>
        <Tabs
          activeKey={platformType}
          onChange={(activeKey) => {
            const newActiveKey = activeKey as PlatformDataTypeEnum;
            history.push(`/browse?tabKey=${newActiveKey}`);
            setPlatformType(newActiveKey);
          }}
          items={Object.keys(PlatformDataTypeEnumText).map((key) => {
            const newKey = key as PlatformDataTypeEnum;
            return {
              label: PlatformDataTypeEnumText[newKey],
              key: newKey,
              children: platformTypeComponent[newKey],
            };
          })}
        />
      </ProCard>
    </PageContainer>
  );
};
