import { Anchor, Typography } from 'antd';
import _ from 'lodash';

import { isEmpty } from '@/common';
import { BLANK_PLACEHOLDER } from '@/constants';
import { Reference } from '@/types';

export type RefIdProps = {
  value?: string | number;
  refDataSource?: Reference[];
  refAttr?: keyof Reference;
  onClick?: React.DOMAttributes<HTMLElement>['onClick'];
};

export const RefId = (props: RefIdProps) => {
  const { value, refDataSource, refAttr = 'ref_id' } = props;

  const index = _.findIndex(refDataSource, (item) => item.ref_id === value);

  const _currentRef = _.find(refDataSource, (item) => item.ref_id === value);

  const renderContent = () => {
    let result = null;
    if (!isEmpty(value) && value) {
      switch (refAttr) {
        case 'ref_id':
          result = (
            <Anchor
              direction="horizontal"
              items={[
                {
                  key: value,
                  href: `#${value}`,
                  title: (
                    <Typography.Text className="link-text">{`【${
                      index + 1
                    }】`}</Typography.Text>
                  ),
                },
              ]}
            />
          );
          break;
        case 'dois':
          result = _currentRef ? (
            <Typography.Link
              href={` http://www.doi.org/${_currentRef['dois']}`}
              target="_blank"
            >
              {_currentRef['dois']}
            </Typography.Link>
          ) : null;
          break;
        default:
          result = _currentRef ? (
            <Typography.Link href={_currentRef.url} target="_blank">
              {_currentRef[refAttr]}
            </Typography.Link>
          ) : null;
      }
    }

    return result || BLANK_PLACEHOLDER;
  };

  return renderContent();
};
