import { IApi } from '@umijs/max';

const fs = require('fs');
const path = require('path');

const G_DEFAULT_CACHE_GROUPS = {
  // antd相关
  antd: {
    name: 'antd',
    chunks: 'all',
    test: /[\\/]node_modules[\\/](antd)/,
    priority: 12,
  },
  antdDesign: {
    name: 'antdDesign',
    chunks: 'all',
    test: /[\\/]node_modules[\\/]@ant-design/,
    priority: 16,
  },
  // react相关
  react: {
    name: 'react',
    chunks: 'all',
    test: /[\\/]node_modules[\\/]react(-dom|-router|-router-dom)?/,
    priority: 11,
  },
  //  基础函数
  common: {
    name: 'common',
    chunks: 'all',
    test: /[\\/]node_modules[\\/](lodash|classnames|ahooks|query-string|dayjs)/,
    priority: 10,
  },
  //  echart
  echarts: {
    name: 'echarts',
    chunks: 'all',
    test: /[\\/]node_modules[\\/]echarts/,
    priority: 10,
  },
  echartsGl: {
    name: 'echartsGl',
    chunks: 'all',
    test: /[\\/]node_modules[\\/]echarts-gl/,
    priority: 12,
  }
};
const gCodeSplitting = async (api: IApi) => {
  let finalJsFiles: string[] = [];
  let finalCssFiles: string[] = [];

  api.describe({
    key: 'gCodeSplitting',
    config: {
      schema(Joi) {
        return Joi.alternatives().try(
          Joi.object({
            // 配置路径
            cacheGroups: Joi.object(),
          }),
          Joi.boolean().invalid(true),
        );
      },
    },
    enableBy: api.EnableBy.config,
  });

  if (api.env === 'production') {
    api.chainWebpack((memo) => {
      const finalCacheGroups = api.config?.gCodeSplitting?.cacheGroups || {};

      memo.optimization.splitChunks({
        cacheGroups: {
          ...G_DEFAULT_CACHE_GROUPS,
          ...finalCacheGroups,
        },
      });
      return memo;
    });

    api.onBuildComplete({
      fn: () => {
        try {
          const files = fs.readdirSync(path.join(api.paths.absOutputPath));
          const jsFiles = files.filter((item) => item.includes('.js'));
          const cssFiles = files.filter((item) => item.includes('.css'));
          const { publicPath } = api.config;

          const configCacheGroups =
            api.config?.gCodeSplitting?.cacheGroups || {};
          const finalCacheGroups = {
            ...G_DEFAULT_CACHE_GROUPS,
            ...configCacheGroups,
          };

          const cacheGroups = Object.keys(finalCacheGroups);

          cacheGroups.forEach((jsChunkName) => {
            const jsChunks = jsFiles
              .filter((item) => item.startsWith(`${jsChunkName}.`))
              .map((item) => `<script src=${publicPath}${item}></script>`);
            finalJsFiles = finalJsFiles.concat(jsChunks);
          });

          cacheGroups.forEach((cssChunkName) => {
            const cssChunks = cssFiles
              .filter((item) => item.startsWith(`${cssChunkName}.`))
              .map(
                (item) =>
                  `<link rel="stylesheet" href=${publicPath}${item}></link>`,
              );
            finalCssFiles = finalCssFiles.concat(cssChunks);
          });

          return files;
        } catch (error) {
          console.log(error);
        }
      },
    });

    api.modifyHTML(($) => {
      $('body').append(finalJsFiles);
      $('head').append(finalCssFiles);
      return $;
    });
  }
};

export default gCodeSplitting;
