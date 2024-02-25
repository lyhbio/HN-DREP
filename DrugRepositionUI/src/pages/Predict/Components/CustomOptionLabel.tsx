import { BLANK_PLACEHOLDER } from '@/constants';
import { CloseOutlined, UndoOutlined } from '@ant-design/icons';
import { Row, Space, Typography } from 'antd';
import _ from 'lodash';

export type CustomOptionLabelProps = {
  onClear: () => void;
  text: string;
};

export const CustomOptionLabel = (props: CustomOptionLabelProps) => {
  const { onClear, text } = props;

  return (
    <Row justify="space-between">
      <Space>
        <UndoOutlined style={{ fontSize: '16px' }} />
        <Typography.Text>
          Search For: {text || BLANK_PLACEHOLDER}
        </Typography.Text>
      </Space>

      <CloseOutlined
        style={{ fontSize: '16px' }}
        onClick={(e) => {
          e.stopPropagation();
          if (_.isFunction(onClear)) {
            onClear();
          }
        }}
      />
    </Row>
  );
};
