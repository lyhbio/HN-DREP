import { DownloadOutlined } from '@ant-design/icons';
import { Button, ButtonProps, Space, message } from 'antd';
import _ from 'lodash';

import { downloadFile } from '@/common';

export type DownloadButtonProps = ButtonProps & {
  downloadContent: string;
  downloadFileName: string;
  onSuccess?: () => {};
};

export const DownloadButton = (props: DownloadButtonProps) => {
  const { downloadContent, downloadFileName, onSuccess, ...more } = props;

  const handleDownload = () => {
    downloadFile(downloadContent, downloadFileName);
    message.success('下载成功');
    if (_.isFunction(onSuccess)) {
      onSuccess();
    }
  };

  return (
    <Button
      {...more}
      type="primary"
      onClick={() => {
        handleDownload();
      }}
    >
      <Space size="small">
        <span>download</span>
        <DownloadOutlined />
      </Space>
    </Button>
  );
};
