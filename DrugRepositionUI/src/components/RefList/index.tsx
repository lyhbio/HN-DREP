import { List, Space, Typography } from 'antd';

import { Reference } from '@/types';

export type RefListProps = {
  dataSource: Reference[];
};

export const RefList = (props: RefListProps) => {
  const { dataSource = [] } = props;
  return (
    <List
      dataSource={dataSource}
      renderItem={(item, index) => (
        <div id={item.ref_id} className="mb-md">
          <Space size={8}>
            <div style={{ minWidth: '46px' }}>
              <Typography.Text>{`【${index + 1}】`}</Typography.Text>
            </div>
            <Typography.Link href={item.url} target="_blank" strong>
              {item.title}
            </Typography.Link>
          </Space>
        </div>
      )}
    />
  );
};
