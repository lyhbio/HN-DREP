import { Row, Space, Typography } from 'antd';

export const Footer = () => {
  return (
    <Row justify="center" className="mb-md mt-md">
      <Space align="center">
        <Typography.Text
          style={{
            fontSize: '16px',
          }}
        >{`${new Date().getFullYear()} Chongqing. All rights reserved`}</Typography.Text>
        <Typography.Link
          style={{
            fontSize: '16px',
          }}
          href="https://beian.miit.gov.cn/"
          target="_blank"
        >
          渝ICP备17006613号-5
        </Typography.Link>
      </Space>
    </Row>
  );
};
