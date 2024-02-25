import { useRequest } from '@umijs/max';
import { Col, Image, Row, Space, Typography } from 'antd';

import { PLATFORM_NAME } from '@/constants';
import { getHomeStatisticsService } from '@/services';

import enterpriseTwoPng from '@/assets/entereprsise-two.png';
import workflowImage from '@/assets/home-top-workflow.png';

import { ProTable } from '@ant-design/pro-components';
import './style.less';

export default () => {
  const { data, loading } = useRequest(getHomeStatisticsService);

  return (
    <div className="home-container">
      <Row className="main-container top" justify="center">
        <div className="main-content">
          <Row justify="center">
            <Typography.Title level={3}>
              <Space size="small">
                <span>
                  <strong className="link-text">H</strong>eterogeneous
                </span>
                <span>
                  <strong className="link-text">N</strong>etwork-based
                </span>
                <span>
                  <strong className="link-text">D</strong>rug
                </span>
                <span>
                  <strong className="link-text">R</strong>epositioning
                </span>
                <span>
                  <strong className="link-text">E</strong>valuation
                </span>
                <span>and</span>
                <span>
                  <strong className="link-text">P</strong>rediction
                </span>
                <span>database({PLATFORM_NAME})</span>
              </Space>
            </Typography.Title>
          </Row>
          <Row justify="center">
            <Typography.Title level={5}>
              The HN-DREP database is a platform that is dedicated to evaluating
              heterogeneous network-based drug repositioning methods and
              predicting drug-disease associations. It provides an impartial
              assessment of existing network-driven drug repositioning methods
              and consolidates predictions from various repositioning methods.
              This summary represents the current stage of research on
              heterogeneous network-based drug repositioning methods, which aims
              to promote the development of drug repositioning.
            </Typography.Title>
          </Row>
          <Row justify="center">
            <Image src={workflowImage} preview={false} className="mt-md" />
          </Row>
        </div>
      </Row>
      <Row className="main-container statistics" justify="center">
        <div className="main-content">
          <Row justify="center">
            <Typography.Title level={3}>Statistics</Typography.Title>
          </Row>
          <Row justify="center">
            <Typography.Title level={5}>Overview of Database</Typography.Title>
          </Row>

          <ProTable
            className="mt-md"
            options={false}
            search={false}
            ghost
            pagination={false}
            dataSource={[
              {
                methods: 28,
                disease_id_type: 'OMIM',
                datasets: 5,
                drugs: 2794,
                diseases: 4220,
                associations: 1805270,
              },
              {
                methods: 28,
                disease_id_type: 'MeSH',
                datasets: 3,
                drugs: 2794,
                diseases: 2892,
                associations: 984676,
              },
              {
                methods: 28,
                disease_id_type: 'MedGen',
                datasets: 1,
                drugs: 2794,
                diseases: 1229,
                associations: 874245,
              },
              {
                methods: 28,
                disease_id_type: 'Disease Name',
                datasets: 2,
                drugs: 2794,
                diseases: 4552,
                associations: 3499069,
              },
            ]}
            columns={[
              {
                dataIndex: 'methods',
                title: 'Methods',
                align: 'center',
                onCell: (_, index) => {
                  if (index === 0) {
                    return { rowSpan: 4 };
                  } else {
                    return { rowSpan: 0 };
                  }
                },
              },
              {
                dataIndex: 'disease_id_type',
                title: 'Disease ID Type',
                align: 'center',
              },
              {
                dataIndex: 'datasets',
                title: 'Datasets',
                align: 'center',
              },
              {
                dataIndex: 'drugs',
                title: 'Drugs',
                align: 'center',
                onCell: (_, index) => {
                  if (index === 0) {
                    return { rowSpan: 4 };
                  } else {
                    return { rowSpan: 0 };
                  }
                },
              },
              {
                dataIndex: 'diseases',
                title: 'Diseases',
                align: 'center',
              },
              {
                dataIndex: 'associations',
                title: 'Drug-Disease associations',
                align: 'center',
              },
            ]}
          />
        </div>
      </Row>

      <div className="main-container company-container">
        <div className="main-content">
          <Row gutter={64} align="middle" justify="center">
            <Col xl={12} md={24}>
              <Typography.Link
                href="https://ibio.cqupt.edu.cn/"
                target="_blank"
              >
                <Image src={enterpriseTwoPng} preview={false} />
              </Typography.Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
