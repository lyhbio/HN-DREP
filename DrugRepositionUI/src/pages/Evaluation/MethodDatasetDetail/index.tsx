import { PageContainer, ProCard } from '@ant-design/pro-components';
import { history, useSearchParams } from '@umijs/max';
import { useRequest } from 'ahooks';

import {
  AucAuprItem,
  DatasetItem,
  MemoryTimeItem,
  MethodItem,
  PageTable,
  RefId,
  RefList,
} from '@/components';
import { getMethodService } from '@/services';
import { ArrowLeftOutlined } from '@ant-design/icons';

const MethodDatasetDetail = () => {
  const [query] = useSearchParams();

  const dataset_name = query.get('dataset_name') || 'LAGCN';
  const method_name = query.get('method_name') || 'ANMF';

  const { data, loading } = useRequest(() =>
    getMethodService({
      dataset_name,
      method_name,
    }),
  );

  const detailInfo = data?.data;

  return (
    <PageContainer
      loading={loading}
      backIcon={<ArrowLeftOutlined />}
      onBack={history.back}
      title={`${method_name} Performence On ${dataset_name}`}
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

      <ProCard
        className="mb-md"
        title="Dataset Info"
        bordered
        headerBordered
        extra={
          <RefId
            value={
              detailInfo?.datasets?.length
                ? detailInfo?.datasets[0].ref_id
                : undefined
            }
            refDataSource={detailInfo?.references}
          />
        }
      >
        <DatasetItem
          dataSource={
            detailInfo?.datasets?.length
              ? {
                  ...detailInfo?.datasets[0],
                  references: detailInfo?.references || [],
                }
              : undefined
          }
        />
      </ProCard>

      <ProCard
        className="mb-md"
        title="Perfermence Result"
        bordered
        headerBordered
      >
        <AucAuprItem
          dataSource={
            detailInfo?.datasets?.length ? detailInfo?.datasets[0] : undefined
          }
        />
        <MemoryTimeItem
          dataSource={
            detailInfo?.datasets?.length ? detailInfo?.datasets[0] : undefined
          }
        />
      </ProCard>

      <PageTable dataset_name={dataset_name} method_name={method_name} />

      {detailInfo?.references?.length ? (
        <ProCard title="References">
          <RefList dataSource={detailInfo?.references} />
        </ProCard>
      ) : null}
    </PageContainer>
  );
};

export default MethodDatasetDetail;
