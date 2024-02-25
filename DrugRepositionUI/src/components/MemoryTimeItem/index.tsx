import { AUC_BLANK_PLACEHOLDER } from '@/constants';
import { ProDescriptions } from '@ant-design/pro-components';
import { Col, Row } from 'antd';

import { COMMON_SPAN } from '@/constants';
import { MemoryEnum, MemoryEnumText, TimeEnum, TimeEnumText } from '@/enums';
import { Method } from '@/types';



export type MemoryTimeItemProps = {
  dataSource?: Partial<
    Pick<Method, 'auc' | 'aupr' | 'auc_curve' | 'aupr_curve' | 'f1'>
  >;
};

export const MemoryTimeItem = (props: MemoryTimeItemProps) => {
  const { dataSource } = props;

  return (
    <Row gutter={16} className="mt-md">
      <Col {...COMMON_SPAN}>
        <ProDescriptions
          title={TimeEnumText[TimeEnum['TIME']]}
          className="comp-memory-time-description"
          bordered
          dataSource={dataSource}
          column={1}
          columns={[
            {
              dataIndex: 'time_human',
              title: TimeEnumText[TimeEnum['TIME']],
              tooltip: "The program's execution time was tested on a machine equipped with dual Intel(R) Xeon(R) Gold 6148F CPUs running at 2.40GHz, 188GB of RAM, and operating on Linux version 4.15.0-197-generic",
              render(text) {
                return text || AUC_BLANK_PLACEHOLDER;
              },
            },
          ]}
        />
      </Col>
      <Col {...COMMON_SPAN}>
        <ProDescriptions
         title={MemoryEnumText[MemoryEnum['MEMORY']]}
          className="comp-memory-time-description"
          bordered
          dataSource={dataSource}
          column={1}
          columns={[
            {
              dataIndex: 'memory_human',
              title: MemoryEnumText[MemoryEnum['MEMORY']],
              tooltip: "The program's memory consumption was tested on a machine equipped with dual Intel(R) Xeon(R) Gold 6148F CPUs running at 2.40GHz, 188GB of RAM, and operating on Linux version 4.15.0-197-generic.",
              render(text) {
                return text || AUC_BLANK_PLACEHOLDER;
              },
            },
          ]}
        />
      </Col>
    </Row>
  );
};
