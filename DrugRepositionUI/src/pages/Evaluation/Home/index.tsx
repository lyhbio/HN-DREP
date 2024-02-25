import { PageContainer, ProCard } from '@ant-design/pro-components';
import { history, useRequest, useSearchParams } from '@umijs/max';
import { useSafeState } from 'ahooks';
import { Image, Space, Typography } from 'antd';

import usabilityPng from '@/assets/usability.png';
import { EvalutionTypeEnum, EvalutionTypeEnumText } from '@/enums';
import { getHomeDataService } from '@/services';

import { OverAll } from './OverAll';
import { Performance } from './Performance';
import { Scalability } from './Scalability';

const HomePage = () => {
  const { data, loading } = useRequest(getHomeDataService);
  const [searchParams] = useSearchParams();
  const defaultEvalutionType =
    (searchParams.get('tabKey') as EvalutionTypeEnum) ||
    EvalutionTypeEnum.OVERALL;

  const [evalutionType, setEvalutionType] =
    useSafeState<EvalutionTypeEnum>(defaultEvalutionType);

  const evalutionTypeComponent: Record<EvalutionTypeEnum, React.ReactNode> = {
    [EvalutionTypeEnum.OVERALL]: <OverAll />,
    [EvalutionTypeEnum.PERFORMANCE]: <Performance data={data} />,
    [EvalutionTypeEnum.SCALABILITY]: <Scalability data={data} />,
    [EvalutionTypeEnum.USABILITY]: (
      <ProCard>
        <Image
          src={usabilityPng}
          preview={false}
        />
      </ProCard>
    ),
  };

  return (
    <PageContainer
      loading={loading}
      subTitle="Evaluating the Performance(AUC, AUPR, F1), Scalability and Usability
      of heterogeneous network-based drug repositioning methods"
    >
      <ProCard
        headerBordered
        title={
          <Typography.Title level={5}>
            <Space size={4}>
              <span> Our evaluation workflow is available at:</span>
              <Typography.Link href='https://github.com/lyhbio/HN-DRES' target="_blank">
                https://github.com/lyhbio/HN-DRES
              </Typography.Link>
            </Space>
          </Typography.Title>
        }
        tabs={{
          activeKey: evalutionType,
          tabPosition: 'left',
          items: Object.keys(EvalutionTypeEnumText).map((key) => {
            const newKey = key as EvalutionTypeEnum;
            return {
              label: EvalutionTypeEnumText[newKey],
              key: newKey,
              children: evalutionTypeComponent[newKey],
            };
          }),

          onChange(activeKey) {
            const newActiveKey = activeKey as EvalutionTypeEnum;
            history.push(`/evaluation?tabKey=${newActiveKey}`);
            setEvalutionType(newActiveKey);
          },
        }}
      />
    </PageContainer>
  );
};

export default HomePage;
