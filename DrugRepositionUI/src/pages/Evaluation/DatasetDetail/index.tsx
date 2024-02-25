import { ArrowLeftOutlined } from '@ant-design/icons';
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
import { getDatasetService } from '@/services';

const DatasetDetail = () => {
  const [query] = useSearchParams();

  const dataset_name = query.get('dataset_name') || 'LAGCN';

  const { data, loading } = useRequest(() =>
    getDatasetService({
      dataset_name,
    }),
  );

  const detailInfo = data?.data;

  return (
    <PageContainer
      loading={loading}
      backIcon={<ArrowLeftOutlined />}
      onBack={history.back}
      title="Dataset Details"
    >
      <ProCard
        className="mb-md"
        title="Dataset Info"
        bordered
        headerBordered
        extra={
          <RefId
            value={detailInfo?.ref_id}
            refDataSource={detailInfo?.references}
          />
        }
      >
        <DatasetItem dataSource={detailInfo} />
      </ProCard>

      {detailInfo?.methods?.length ? (
        <ProCard
          title={`Method Performance On ${dataset_name}`}
          className="mb-md"
          bordered
          headerBordered
          wrap
        >
          {detailInfo?.methods.map((item, index) => {
            return (
              <ProCard
                key={item.method_name}
                bordered
                className="mb-md"
                title={item.method_name}
                collapsible
                defaultCollapsed={index !== 0}
                extra={
                  <RefId
                    value={item?.ref_id}
                    refDataSource={detailInfo?.references}
                  />
                }
              >
                <MethodItem
                  dataSource={{
                    ...item,
                    references: detailInfo?.references || [],
                  }}
                  showAucApr
                  showMemoryTime
                  hideEvalutionData
                />
              </ProCard>
            );
          })}
        </ProCard>
      ) : null}

      <PageTable dataset_name={dataset_name} methods={detailInfo?.methods} />

      {detailInfo?.references?.length ? (
        <ProCard title="References">
          <RefList dataSource={detailInfo?.references} />
        </ProCard>
      ) : null}
    </PageContainer>
  );
};

export default DatasetDetail;
