import { defineConfig } from '@umijs/max';

import { API_URL, COLOR_PRIMARY } from './src/constants';

export default defineConfig({
  plugins: [require.resolve('./src/plugins/gCdoeSplitting')],
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  styledComponents: {},
  scripts: [
    {
      src: '/3Dmol-min.js',
    },
    {
      src: '/',
    },
  ],
  layout: {
    title: '@umijs/max',
  },
  gCodeSplitting: {},
  theme: {
    '@primary-color': COLOR_PRIMARY
  },
  favicons: [
    // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
    '/favicon.png'
  ],
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      icon: 'HomeOutlined',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Browse',
      icon: 'ApartmentOutlined',
      path: '/browse',
      component: './Browse',
    },
    {
      name: 'Evaluation',
      path: '/evaluation',
      icon: 'BarChartOutlined',
      routes: [
        {
          name: 'Evaluation',
          path: '/evaluation',
          component: './Evaluation/Home',
          hideInMenu: true,
        },
        {
          name: 'Dataset',
          path: '/evaluation/dataset-detail',
          component: './Evaluation/DatasetDetail',
          hideInMenu: true,
        },
        {
          name: 'Method',
          path: '/evaluation/method-detail',
          component: './Evaluation/MethodDetail',
          hideInMenu: true,
        },
        {
          name: 'Method_Dataset',
          path: '/evaluation/method-dataset-detail',
          component: './Evaluation/MethodDatasetDetail',
          hideInMenu: true,
        },
      ],
    },
    {
      name: 'Predict',
      path: '/predict',
      icon: 'SearchOutlined',
      routes: [
        {
          name: 'Predict',
          path: '/predict',
          component: './Predict',
          hideInMenu: true,
        },
        {
          name: 'Predicting Results',
          path: '/predict/detail',
          component: './Predict/Detail',
          hideInMenu: true,
        },
      ],
    },
    {
      name: 'Download',
      icon: 'DownloadOutlined',
      path: '/download',
      component: './Download',
    },
    {
      name: 'Help',
      icon: 'ToolOutlined',
      path: '/help',
      component: './Help',
    },
  ],
  npmClient: 'pnpm',
  mfsu: true,
  proxy: {
    '/v1': {
      changeOrigin: true,
      target: API_URL,
    },
  },
});
