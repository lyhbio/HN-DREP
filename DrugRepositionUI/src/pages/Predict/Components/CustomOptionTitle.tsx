import { Button, Row, Typography } from 'antd';
import _ from 'lodash';

export type CustomOptionTitleProps = {
  onClear: () => void;
};

export const CustomOptionTitle = (props: CustomOptionTitleProps) => {
  const { onClear } = props;
  return (
    <Row justify="space-between" align="middle" className="mb-xs">
      <Typography.Link style={{ fontSize: '16px' }}>Recent</Typography.Link>
      <Button
        type="primary"
        ghost
        onClick={() => {
          if (_.isFunction(onClear)) {
            onClear();
          }
        }}
      >
        clear all
      </Button>
    </Row>
  );
};
