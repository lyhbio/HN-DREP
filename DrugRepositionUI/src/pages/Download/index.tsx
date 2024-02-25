import { DownloadOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Row, Space, Spin, Tooltip, Tree, message } from 'antd';

import { downloadService, getDownloadFiles } from '@/services';

import { convertBytesToKBMBGB, downloadFile } from '@/common';
import { DownloadNodeData } from '@/types';
import { useMemoizedFn, useSafeState } from 'ahooks';
import './style.less';

export default () => {
  const { data, loading: downloadFileLoading } = useRequest(getDownloadFiles);

  const [loading, setLoading] = useSafeState(false);
  const [selectedKeys, setSelectedKeys] = useSafeState<React.Key[]>([]);

  const handleDownload = useMemoizedFn(async (nodeData: DownloadNodeData) => {
    const node = nodeData;
    setSelectedKeys([node.path]);
    try {
      setLoading(true);
      let downloadPath = node.path;
      const blob = await downloadService(downloadPath);
      
      const _downloadPath = `downnload.zip`;

      downloadFile(blob, _downloadPath);
      message.success('下载成功');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  });

  return (
    <PageContainer
      loading={downloadFileLoading}
      subTitle="Download the drug and disease information, datasets and the predicted results by the method"
    >
      <Spin
        spinning={loading}
        tip="the file is being downloaded, please wait patiently"
      >
        <ProCard>
          <Tree.DirectoryTree
            className="download-tree-container"
            defaultExpandParent
            fieldNames={{
              title: 'name',
              key: 'path',
            }}
            treeData={data}
            selectedKeys={selectedKeys}
            defaultExpandedKeys={data?.map((item) => item.name)}
            onSelect={(keys) => {
              setSelectedKeys(keys);
            }}
            titleRender={(nodeData: DownloadNodeData) => {
              return (
                <Row justify="space-between">
                  <span>{nodeData.name}</span>
                  <Tooltip title="click to download">
                    <Space
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(nodeData);
                      }}
                    >
                      <span>{convertBytesToKBMBGB(nodeData.size)}</span>
                      <DownloadOutlined />
                    </Space>
                  </Tooltip>
                </Row>
              );
            }}
          />
        </ProCard>
      </Spin>
    </PageContainer>
  );
};
