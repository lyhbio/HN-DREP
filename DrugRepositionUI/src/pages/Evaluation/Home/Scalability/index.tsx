import { ProCard } from '@ant-design/pro-components';

import { ShapeValue } from '@/components';
import { MemoryEnum, MemoryEnumText, TimeEnum, TimeEnumText } from '@/enums';
import { HomeDatasetData } from '@/types';

import { Space } from 'antd';
import { TableShow } from '../TableShow';

export type ScalabilityProps = {
  data?: HomeDatasetData;
};

export const Scalability = (props: ScalabilityProps) => {
  const { data } = props;

  return (
    <>
      <ProCard
        title={`${TimeEnumText[TimeEnum.TIME]} Usage`}
        ghost
        extra={
          <Space size="large">
            <ShapeValue.Bar />
            <ShapeValue.NA />
          </Space>
        }
        headStyle={{
          paddingInline: 0,
        }}
      >
        <TableShow data={data} valueEnum={TimeEnum} showHeaderTitle={false} />
      </ProCard>
      <ProCard
        ghost
        title={`${MemoryEnumText[MemoryEnum.MEMORY]} Usage`}
        extra={
          <Space size="large">
            <ShapeValue.Bar  />
            <ShapeValue.NA />
          </Space>
        }
        headStyle={{
          paddingInline: 0,
        }}
      >
        <TableShow data={data} valueEnum={MemoryEnum} showHeaderTitle={false} />
      </ProCard>
    </>
  );
};
