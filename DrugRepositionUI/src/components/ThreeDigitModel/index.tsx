import { ProCard } from '@ant-design/pro-components';
import { useDeepCompareEffect, useEventListener, useMemoizedFn } from 'ahooks';
import { useRef } from 'react';

import { isEmpty } from '@/common';
import { BLANK_PLACEHOLDER } from '@/constants';

import { DownloadButton } from '../index';

import './style.less';

export type ThreeDigitModelProps = {
  data: string;
  height?: number;
  downloadInfo?:
    | {
        fileName?: string;
      }
    | false;
};

const DEFAULT_DOWNLOAD_INFO = {
  fileName: 'download',
};

export const ThreeDigitModel = (props: ThreeDigitModelProps) => {
  const { data, downloadInfo = DEFAULT_DOWNLOAD_INFO, height = 300 } = props;

  const modelContainerRef = useRef<HTMLDivElement>(null);

  const downloadFileName =
    downloadInfo !== false
      ? `${downloadInfo.fileName}.sdf`
      : `${DEFAULT_DOWNLOAD_INFO.fileName}.sdf`;

  const get3dModel = useMemoizedFn((sdfData: string) => {
    let element = modelContainerRef.current;
    let config = { backgroundColor: 'white' };
    if (element && sdfData) {
      let viewer = $3Dmol.createViewer(element, config);
      viewer.addModel(sdfData, 'sdf');

      viewer.addUnitCell();
      viewer.setStyle({
        stick: {
          radius: 0.15,
          colorscheme: 'chain',
        },
        sphere: {
          radius: 0.35,
        },
      });
      viewer.zoomTo();
      viewer.render();
    }
  });

  useDeepCompareEffect(() => {
    if (!isEmpty(data)) {
      get3dModel(data);
    }
  }, [data]);

  useEventListener('resize', () => {
    get3dModel(data);
  });

  return (
    <ProCard
      className="comp-three-digit-model-container"
      extra={
        downloadInfo !== false && !isEmpty(data) ? (
          <DownloadButton
            downloadContent={data}
            downloadFileName={downloadFileName}
          ></DownloadButton>
        ) : null
      }
    >
      {isEmpty(data) ? (
        BLANK_PLACEHOLDER
      ) : (
        <div
          ref={modelContainerRef}
          style={{ height: `${height}px`, zIndex: 10 }}
        />
      )}
    </ProCard>
  );
};
