import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProSkeleton,
} from '@ant-design/pro-components';
import { history, useRequest, useSearchParams } from '@umijs/max';
import { useDeepCompareEffect, useMemoizedFn, useSafeState } from 'ahooks';
import { Col, Row, Space, Tabs, Typography } from 'antd';
import { useMemo } from 'react';

import { jsonToCsv } from '@/common';
import {
  CustomProTable,
  DiseaseItem,
  DownloadButton,
  DrugItem,
} from '@/components';
import { PredictTypeEnum } from '@/enums';
import { getSearchDataService } from '@/services';
import { SearchDatasetMethodData } from '@/types';

import { Empty } from 'antd/lib';
import { isEmpty } from 'lodash';
import { DiseaseInfo } from './DiseaseInfo';
import { DrugInfo } from './DrugInfo';

const PredictDetail = () => {
  const [query] = useSearchParams();

  const type = (query.get('type') || PredictTypeEnum.drug) as PredictTypeEnum;
  const id = query.get('id') || undefined;
  const name = query.get('name') || undefined;

  const { data, loading } = useRequest(
    () => {
      return getSearchDataService(
        {
          drugbank_id: type === PredictTypeEnum.drug ? id : undefined,
          disease_name: type === PredictTypeEnum.disease ? name : undefined,
        },
        type === PredictTypeEnum.drug,
      );
    },
    {
      refreshDeps: [type],
    },
  );

  const [methods, setMethods] = useSafeState<string[]>([]);
  const [methodScoreList, setMethodScoreList] = useSafeState<
    SearchDatasetMethodData[]
  >([]);
  const [selectedMethod, setSelectedMethod] = useSafeState('');

  const generateOverviewData = useMemoizedFn(
    (
      source: SearchDatasetMethodData[] = [],
      sourceType: 'disease_name' | 'drug_name' = 'disease_name',
    ) => {
      let sourceObj: Record<string, string[]> = {};
      source?.forEach((item) => {
        if (!sourceObj[item[sourceType]]) {
          sourceObj[item[sourceType]] = [item.method_name];
        } else {
          if (!sourceObj[item[sourceType]].includes(item.method_name)) {
            sourceObj[item[sourceType]].push(item.method_name);
          }
        }
      });
      let overviewData: { name: string; methods: string[], id: string }[] = [];

      Object.keys(sourceObj).forEach((key) => {
        const currentNameInfo = source.find((item) => item[sourceType] === key);
        const idAttr: keyof SearchDatasetMethodData = sourceType === 'disease_name' ? 'disease_id': 'drugbank_id';
        if (currentNameInfo) {
          overviewData.push({
            name: key,
            methods: sourceObj[key],
            id: currentNameInfo[idAttr],
          });
        }
      });

      overviewData.sort(
        (small, big) => big.methods.length - small.methods.length,
      );

      return overviewData;
    },
  );

  const generateDownloadOverviewData = useMemoizedFn(
    (
      source: SearchDatasetMethodData[] = [],
      sourceType: 'disease_name' | 'drug_name' = 'disease_name',
    ) => {
      let initResult = generateOverviewData(source, sourceType);
      const result = initResult.map((item) => {
        const _item = {
          [sourceType === 'disease_name' ? 'Disease Name' : 'Drug Name']:
            item.name,
          Count: item.methods.length,
          Methods: item.methods.join(' '),
        };
        return _item;
      });
      return result;
    },
  );

  const getAllDataMethods = useMemoizedFn(
    (source: SearchDatasetMethodData[] = []) => {
      let methods: string[] = [];
      source.forEach((item) => {
        if (!methods.includes(item.method_name)) {
          methods.push(item.method_name);
        }
      });

      if (methods.length) {
        setSelectedMethod(methods[0]);
      }
      setMethods(methods);
    },
  );

  const updateMethodScoreList = useMemoizedFn(
    (source: SearchDatasetMethodData[] = [], method_name: string) => {
      const result = source.filter((item) => item.method_name === method_name);
      setMethodScoreList(result);
    },
  );

  const overviewDataSource = useMemo(() => {
    return generateOverviewData(
      data,
      type === PredictTypeEnum.drug ? 'disease_name' : 'drug_name',
    );
  }, [data, generateOverviewData, type]);

  const overviewDownloadDataSource = useMemo(() => {
    return generateDownloadOverviewData(
      data,
      type === PredictTypeEnum.drug ? 'disease_name' : 'drug_name',
    );
  }, [data, generateDownloadOverviewData, type]);

  const diseaseColumns = useMemo(() => {
    return type === PredictTypeEnum.drug ? DiseaseItem.diseaseIdsColumns : [];
  }, [type]);

  useDeepCompareEffect(() => {
    getAllDataMethods(data);
  }, [data]);

  useDeepCompareEffect(() => {
    updateMethodScoreList(data, selectedMethod);
  }, [data, selectedMethod]);

  return (
    <PageContainer
      backIcon={<ArrowLeftOutlined />}
      onBack={history.back}
      title={type === PredictTypeEnum.drug ? 'Drug Details' : 'Disease Details'}
    >
      {type === PredictTypeEnum.disease ? (
        <DiseaseInfo diseaseName={name} diseaseId={id} />
      ) : (
        <DrugInfo drugId={id} />
      )}

      <ProCard
        className="mt-md"
        title="Predicted Results"
        tooltip={
          <div>
            The prediction result block only shows the first 100 prediction
            results of the method on each dataset with a prediction score greater
            than 0.5. If you want to get all the results, you can get it on the
            <Typography.Link
              style={{ margin: '0 8px' }}
              onClick={() => {
                history.push('/download');
              }}
            >
              download
            </Typography.Link>
            page.
          </div>
        }
        bordered
        headerBordered
        loading={loading ? <ProSkeleton type="list" /> : null}
      >
        {overviewDataSource.length > 0 ? (
          <Row gutter={60}>
            <Col span={12}>
              <Row justify="space-between" className="mb-md">
                <Typography.Title level={5}>Overview</Typography.Title>
                <DownloadButton
                  downloadContent={jsonToCsv(overviewDownloadDataSource)}
                  downloadFileName="Overview.csv"
                />
              </Row>
              <CustomProTable
                customSticky={false}
                search={false}
                pagination={false}
                rowKey={(record) => JSON.stringify(record)}
                dataSource={overviewDataSource}
                columns={[
                  type === PredictTypeEnum.drug
                    ? DiseaseItem.diseaseNameColumn
                    : DrugItem.drugNameColumn,
                  {
                    title: 'Count',
                    dataIndex: 'count',
                    width: 120,
                    render(text, record) {
                      return record.methods.length;
                    },
                  },
                  {
                    title: 'Methods',
                    dataIndex: 'methods',
                    render(text, record) {
                      return (
                        <Space size="small">
                          {record.methods.map((item) => {
                            return (
                              <Typography.Text
                                key={item}
                                className={
                                  item === selectedMethod
                                    ? 'link-text'
                                    : 'pointer-text'
                                }
                                onClick={() => {
                                  setSelectedMethod(item);
                                }}
                              >
                                {item}
                              </Typography.Text>
                            );
                          })}
                        </Space>
                      );
                    },
                  },
                ]}
              />
            </Col>
            <Col span={12}>
              <Row justify="end" className="mb-md">
                <DownloadButton
                  disabled={methodScoreList.length === 0}
                  downloadContent={jsonToCsv(methodScoreList)}
                  downloadFileName={`${selectedMethod}.csv`}
                />
              </Row>
              <Tabs
                activeKey={selectedMethod}
                onChange={(activeKey) => {
                  setSelectedMethod(activeKey);
                }}
                items={methods.map((item) => {
                  return {
                    key: item,
                    label: item,
                  };
                })}
              />

              <CustomProTable
                customSticky={false}
                search={false}
                pagination={false}
                rowKey="index"
                dataSource={methodScoreList}
                columns={[
                  {
                    title: 'Order',
                    dataIndex: 'index',
                    valueType: 'indexBorder',
                    align: 'center',
                    fixed: 'left',
                    width: 60,
                  },
                  type === PredictTypeEnum.drug ? {} : DrugItem.drugNameColumn,
                  type === PredictTypeEnum.drug ? {} : DrugItem.drugIdColumn,
                  ...diseaseColumns,
                  {
                    dataIndex: 'score',
                    title: 'Score',
                    fixed: 'right',
                    align: 'center',
                    width: 140,
                  },
                ].filter(item => !isEmpty(item) )}
              />
            </Col>
          </Row>
        ) : (
          <Empty description="No Predicting results" />
        )}
      </ProCard>
    </PageContainer>
  );
};

export default PredictDetail;
