import {
  useDeepCompareEffect,
  useEventListener,
  useSafeState,
  useThrottleFn,
} from 'ahooks';
import { Image, ImageProps } from 'antd';
import { useRef } from 'react';

import { isEmpty, isInViewPort } from '@/common';
import { DEFAULt_IMAGE } from '@/constants';

export type CustomImageProps = ImageProps & {
  targetDomRef?: Element | null;
};

export const CustomImage = (props: CustomImageProps) => {
  const { src, targetDomRef, width = 160, height = 160, ...more } = props;

  const [imageIsInViewPort, setImageIsInViewPort] = useSafeState(false);
  const [isError, setIsError] = useSafeState(false);

  const imageRef = useRef(null);

  const { run: changeImageViewPort } = useThrottleFn(
    () => {
      if (imageRef.current && isInViewPort(imageRef.current)) {
        setImageIsInViewPort(true);
      }
    },
    { wait: 500 },
  );

  useEventListener(
    'scroll',
    () => {
      if (!imageIsInViewPort) {
        changeImageViewPort();
      }
    },
    {
      target: targetDomRef,
    },
  );

  useEventListener('resize', () => {
    if (!imageIsInViewPort) {
      changeImageViewPort();
    }
  });

  useDeepCompareEffect(() => {
    changeImageViewPort();
  }, [src]);

  return (
    <div ref={imageRef}>
      <Image
        width={width}
        height={height}
        preview={!isError}
        placeholder={!imageIsInViewPort}
        loading="lazy"
        fallback={DEFAULt_IMAGE}
        onError={() => {
          setIsError(true);
        }}
        {...more}
        src={!isEmpty(src) && imageIsInViewPort ? src : DEFAULt_IMAGE}
      />
    </div>
  );
};
