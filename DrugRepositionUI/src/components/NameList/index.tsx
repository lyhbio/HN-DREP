import { styled } from '@umijs/max';
import { useMemoizedFn, useSafeState } from 'ahooks';
import { GlobalToken, theme } from 'antd';
import _ from 'lodash';
import { useMemo } from 'react';

const { useToken } = theme;

export type OptionType = {
  label: string;
  value: string;
};

export type NameListProps = {
  dataSource: OptionType[] | string[];
  onSelected?: (current: OptionType) => void;
};

const NameContainer = styled.div((props) => () => {
  const theme = props.theme as unknown as GlobalToken;

  return {
    border: `1px solid ${theme.colorBorder}`,
    height: '400px',
    overflowY: 'auto',
    padding: theme.margin,
  };
});

const NameItem = styled.div((props) => () => {
  const theme = props.theme as unknown as GlobalToken;
  const { itemType } = props;
  return {
    color: itemType === 'selected' ? theme.colorPrimary : theme.colorText,
    marginBottom: theme.marginXS,
    cursor: 'pointer',
  };
});

export const NameList = (props: NameListProps) => {
  const { token } = useToken();

  const { dataSource = [], onSelected } = props;

  const [selectedItem, setSelectedItem] = useSafeState<OptionType>();

  const selectedNameItem = useMemoizedFn((current: OptionType) => {
    setSelectedItem(current);
    if (_.isFunction(onSelected)) {
      onSelected(current);
    }
  });

  const finalDataSource = useMemo(() => {
    const result = dataSource.map((item) => {
      let newItem: OptionType = {
        label: '',
        value: '',
      };
      if (_.isObject(item)) {
        newItem = item;
      } else {
        newItem = {
          label: item,
          value: item,
        };
      }
      return newItem;
    });
    return result;
  }, [dataSource]);

  return (
    <NameContainer theme={token}>
      {finalDataSource.map((item) => {
        return (
          <NameItem
            onClick={() => {
              selectedNameItem(item);
            }}
            key={item.value}
            theme={token}
            itemType={selectedItem?.value === item.value ? 'selected' : ''}
          >
            {item.label}
          </NameItem>
        );
      })}
    </NameContainer>
  );
};
