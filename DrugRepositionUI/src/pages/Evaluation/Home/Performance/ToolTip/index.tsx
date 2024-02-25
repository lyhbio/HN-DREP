import { BLANK_PLACEHOLDER } from '@/constants';

import { Badge } from 'antd';
import './style.less';

export type ToolTipProps = {
  data: {
    methodName: string;
    dataSetName: string;
    value: string | number;
    type?: string;
    color?: string;
  };
};

export const ToolTip = (props: ToolTipProps) => {
  const { type ='auc', methodName, dataSetName, value, color } = props.data;
  return (
    <div className="tool-tip-container">
      <div className="list-item">
        <div>Method Name</div>
        <div>{methodName || BLANK_PLACEHOLDER}</div>
      </div>
      <div className="list-item">
        <div>Dataset Name</div>
        <div>{dataSetName || BLANK_PLACEHOLDER}</div>
      </div>
      <div className="list-item">
        <div>{type}</div>
        <div>
          <Badge color={color} text={value || BLANK_PLACEHOLDER} />
        </div>
      </div>
    </div>
  );
};
