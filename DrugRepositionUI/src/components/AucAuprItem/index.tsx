import { AUC_BLANK_PLACEHOLDER, EMPTY_DESCRIPTION } from '@/constants';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Col, Row } from 'antd';

import { CustomImage } from '@/components';
import { COMMON_SPAN } from '@/constants';
import { AucAuprF1Enum, AucAuprF1EnumText } from '@/enums';
import { Method } from '@/types';

import { isEmpty } from '@/common';
import './style.less';

export type AucAuprItemProps = {
  dataSource?: Partial<
    Pick<Method, 'auc' | 'aupr' | 'auc_curve' | 'aupr_curve' | 'f1'>
  >;
};

export const AucAuprItem = (props: AucAuprItemProps) => {
  const { dataSource } = props;

  return (
    <ProCard ghost title={isEmpty(dataSource?.auc) ? EMPTY_DESCRIPTION : null} headerBordered>
      <Row gutter={16} className="mt-md">
        <Col {...COMMON_SPAN}>
          <ProDescriptions
            title={AucAuprF1EnumText[AucAuprF1Enum.AUC]}
            className="comp-auc-aupr-description"
            bordered
            dataSource={dataSource}
            column={1}
            columns={[
              {
                dataIndex: 'auc',
                title: AucAuprF1EnumText[AucAuprF1Enum.AUC],
                render(text) {
                  return text || AUC_BLANK_PLACEHOLDER;
                },
              },
              {
                dataIndex: 'auc_curve',
                title: `${AucAuprF1EnumText[AucAuprF1Enum.AUC]} Curve`,
                render(text, record) {
                  return <CustomImage src={record.auc_curve} width={240} />;
                },
              },
            ]}
          />
        </Col>
        <Col {...COMMON_SPAN}>
          <ProDescriptions
            className="comp-auc-aupr-description"
            bordered
            title={AucAuprF1EnumText[AucAuprF1Enum.AUPR]}
            dataSource={dataSource}
            column={1}
            columns={[
              {
                dataIndex: 'aupr',
                title: AucAuprF1EnumText[AucAuprF1Enum.AUPR],
                render(text) {
                  return text || AUC_BLANK_PLACEHOLDER;
                },
              },
              {
                dataIndex: 'aupr_curve',
                title: `${AucAuprF1EnumText[AucAuprF1Enum.AUPR]} Curve`,
                render(text, record) {
                  return <CustomImage src={record.aupr_curve} width={240} />;
                },
              },
            ]}
          />
        </Col>
        <Col {...COMMON_SPAN}>
          <ProDescriptions
            title={AucAuprF1EnumText[AucAuprF1Enum.F1]}
            className="comp-auc-aupr-description"
            bordered
            dataSource={dataSource}
            column={1}
            columns={[
              {
                dataIndex: 'f1',
                title: AucAuprF1EnumText[AucAuprF1Enum.F1],
                render(text) {
                  return text || AUC_BLANK_PLACEHOLDER;
                },
              },
            ]}
          />
        </Col>
      </Row>
    </ProCard>
  );
};
