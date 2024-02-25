// 运行时配置

import { RequestConfig, RuntimeConfig } from '@umijs/max';
import { ConfigProvider, FloatButton, } from 'antd';
import en_US from 'antd/locale/en_US';

import logoPng from '@/assets/logo.png';
import { apiRequest } from '@/common';
import { Footer } from '@/components';
import { COLOR_PRIMARY, PLATFORM_NAME } from '@/constants';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const request: RequestConfig = apiRequest;

export function rootContainer(container: React.ReactNode) {
  const result = (
    <ConfigProvider
      locale={en_US}
      theme={{
        token: {
          colorPrimary: COLOR_PRIMARY,
        },
      }}
    >
      {container}
      <FloatButton.BackTop type="primary" tooltip="Back To Top" />
    </ConfigProvider>
  );
  return result;
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    logo: logoPng,
    layout: 'top',
    title: PLATFORM_NAME,
    token: {
      header: {
        heightLayoutHeader: 66,
        colorBgHeader: 'rgba(255 255 255 / 0.3)',
        colorBgMenuItemHover: 'rgba(255 255 255 / 0.3)',
        colorTextMenu: '#495a76',
        colorTextMenuActive: COLOR_PRIMARY,
        colorTextMenuSelected: COLOR_PRIMARY,
      },
    },
    rightContentRender: false,
    footerRender: () => <Footer />
  };
};
