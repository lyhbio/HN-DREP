import { PageContainer, ProCard } from '@ant-design/pro-components';
import { history, useSearchParams } from '@umijs/max';
import { useRequest } from 'ahooks';

import {
  DatasetItem,
  MethodItem,
  PageTable,
  RefId,
  RefList,
} from '@/components';
import { getMethodService } from '@/services';
import { ArrowLeftOutlined } from '@ant-design/icons';

const MethodDetail = () => {
  const [query] = useSearchParams();

  const method_name = query.get('method_name') || 'ANMF';

  const { data, loading } = useRequest(() =>
    getMethodService({
      method_name,
    }),
  );

  const detailInfo = data?.data;

  return (
    <PageContainer
      loading={loading}
      title="Method Details"
      backIcon={<ArrowLeftOutlined />}
      onBack={history.back}
    >
      <ProCard
        className="mb-md"
        title="Method Info"
        bordered
        headerBordered
        extra={
          <RefId
            value={detailInfo?.ref_id}
            refDataSource={detailInfo?.references}
          />
        }
      >
        <MethodItem dataSource={detailInfo} />
      </ProCard>

      {detailInfo?.datasets?.length ? (
        <ProCard
          title={`${method_name} Performence On All Datasets`}
          className="mb-md"
          bordered
          headerBordered
          wrap
        >
          {detailInfo?.datasets.map((item, index) => {
            return (
              <ProCard
                key={item.dataset_name}
                bordered
                className="mb-md"
                title={item.dataset_name}
                collapsible
                defaultCollapsed={index !== 0}
                extra={
                  <RefId
                    value={item?.ref_id}
                    refDataSource={detailInfo?.references}
                  />
                }
              >
                <DatasetItem
                  dataSource={{
                    ...item,
                    references: detailInfo?.references || [],
                  }}
                  showAucApr
                  showMemoryTime
                />
              </ProCard>
            );
          })}
        </ProCard>
      ) : null}

      <PageTable method_name={method_name} datasets={detailInfo?.datasets} />

      {detailInfo?.references?.length ? (
        <ProCard title="References">
          <RefList dataSource={detailInfo?.references} />
        </ProCard>
      ) : null}
    </PageContainer>
  );
};

export default MethodDetail;
