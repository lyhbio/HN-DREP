import { useMemoizedFn } from 'ahooks';
import { Row, Space, Tooltip, Typography } from 'antd';
import classnames from 'classnames';

import { VALUE_COLOR_ARRAY, getColorByValue } from '@/common';

import { EMPTY_DESCRIPTION } from '@/constants';
import './style.less';

export type ShapeValueProps = {
  value: number | string;
  color?: string;
  showValue?: boolean;
  className?: string;
  id?: string;
};

export const ShapeValue = (props: ShapeValueProps) => {
  const { value = 0, color, showValue = false, id } = props;

  const defaultColor = getColorByValue(Number(value));

  const getClassNameByValue = useMemoizedFn((currentValue: string | number) => {
    let result = 'shape-value-circle-container';
    if (
      currentValue &&
      Number(currentValue) > 0.8 &&
      Number(currentValue) < 1
    ) {
      result = 'shape-value-oval-container';
    } else if (Number(currentValue) >= 1) {
      result = 'shape-value-square-container';
    }
    return result;
  });

  return (
    <div className="shape-value-parent-container" id={id}>
      <div
        id={id}
        style={{
          width: `${Number(value) * 20}px`,
          height: `${Number(value) * 20}px`,
          backgroundColor: color || defaultColor,
        }}
        className={classnames(
          'shape-value-container',
          getClassNameByValue(value),
        )}
      />
      {showValue ? <div className="shape-value-text">{value}</div> : null}
    </div>
  );
};

ShapeValue.Group = () => {
  let array = Array.from(
    { length: VALUE_COLOR_ARRAY.length },
    (_, index) => index + 1,
  );

  const result = (
    <Space size={16}>
      {array.map((item, index) => {
        const currentValue = item / VALUE_COLOR_ARRAY.length;
        const _index = VALUE_COLOR_ARRAY.length - 1 - index;
        return (
          <ShapeValue
            value={currentValue}
            showValue
            color={VALUE_COLOR_ARRAY[_index]}
            key={item}
          />
        );
      })}
    </Space>
  );
  return result;
};

ShapeValue.Bar = (props: { isReverse?: boolean }) => {
  const { isReverse = false } = props;
  let array = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <>
      <div style={{ display: 'flex' }}>
        {array.map((item, index) => {
          const _index = isReverse
            ? VALUE_COLOR_ARRAY.length - 1 - index
            : index;
          return (
            <div
              className="bar-item"
              key={item}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: VALUE_COLOR_ARRAY[_index],
              }}
            />
          );
        })}
      </div>
      <Row justify="space-between">
        <Typography.Text>Low/Poor</Typography.Text>
        <Typography.Text>High/Good</Typography.Text>
      </Row>
    </>
  );
};

ShapeValue.NA = () => {
  return (
    <Tooltip title={EMPTY_DESCRIPTION}>
      <div style={{ width: '20px', height: '20px', backgroundColor: '#000', cursor:'pointer' }} />
      <Row justify="space-between">
        <Typography.Text>NA</Typography.Text>
      </Row>
    </Tooltip>
  );
};
