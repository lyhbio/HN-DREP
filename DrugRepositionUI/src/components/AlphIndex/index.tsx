import { RightOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { styled } from '@umijs/max';
import { useDeepCompareEffect, useMemoizedFn, useSafeState } from 'ahooks';
import { Anchor, Col, GlobalToken, Row, Typography, theme } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';

import { DatasetItem, MethodItem } from '@/components';
import { PlatformDataTypeEnum } from '@/enums';
import { getDatasetService, getMethodService } from '@/services';

import { useRef } from 'react';
import './style.less';

export type AlphIndexProps = {
  dataSource: string[];
  currentAlphName?: string;
  platformType?: PlatformDataTypeEnum;
};

export type AlphIndexSingleData<T> = {
  name: string;
  firstLater: string;
  expand?: boolean;
  active?: boolean;
  info?: T;
};

export type AlphIndexStateData<T> = {
  name: string;
  list: AlphIndexSingleData<T>[];
};

const ApphIndexList = styled.div((props) => () => {
  const theme = props.theme as unknown as GlobalToken;

  return {
    fontSize: theme.fontSizeLG,
    borderRight: `1px solid ${theme.colorBorder}`,
    paddingRight: theme.marginLG,
    marginRight: theme.marginLG,
  };
});

const ApphIndexContent = styled.div(() => () => {
  return {
    width: '100%',
  };
});

export function AlphIndex<T>(props: AlphIndexProps) {
  const { useToken } = theme;
  const { token } = useToken();

  const { dataSource = [], currentAlphName, platformType } = props;

  const alphRef= useRef<HTMLDivElement>(null);

  const [finalDataSource, setFinalDataSource] = useSafeState<
    AlphIndexStateData<T>[]
  >([]);

  const tansFormData = useMemoizedFn((data: string[]) => {
    let result: AlphIndexSingleData<T>[] = [];
    let finalResult: AlphIndexStateData<T>[] = [];
    result = data.map((item) => {
      return {
        name: item,
        firstLater: _.upperFirst(item).slice(0, 1),
      };
    });

    const ObjResult = _.groupBy(result, 'firstLater');

    Object.keys(ObjResult).forEach((item) => {
      finalResult.push({
        name: item,
        list: ObjResult[item],
      });
    });

    return finalResult;
  });

  const updateDataCollapse = useMemoizedFn(
    (
      alphIndexName: string,
      alphListName: string,
      option: {
        expand?: boolean;
        active?: boolean;
        info?: T;
      },
    ) => {
      let result = finalDataSource.map((item) => {
        const newItem = { ...item };
        if (newItem.name === alphIndexName) {
          newItem.list = newItem.list.map((child) => {
            let newChild = { ...child };
            if (child.name === alphListName) {
              newChild = {
                ...newChild,
                ...option,
              };
            }
            return newChild;
          });
        }
        return newItem;
      });

      setFinalDataSource(result);
    },
  );

  const getInfoService = useMemoizedFn(async (name: string) => {
    let data;
    switch (platformType) {
      case PlatformDataTypeEnum.METHOD:
        {
          const res = await getMethodService({
            method_name: name,
          });
          data = res.data;
        }
        break;
      case PlatformDataTypeEnum.DATASET:
        {
          const res = await getDatasetService({
            dataset_name: name,
          });
          data = res.data;
        }
        break;
    }
    return data;
  });

  const handleCollapse = useMemoizedFn(
    async (item: AlphIndexStateData<T>, child: AlphIndexSingleData<T>) => {
      updateDataCollapse(item.name, child.name, {
        expand: !child.expand,
      });
    },
  );

  useDeepCompareEffect(() => {
    setFinalDataSource(tansFormData(dataSource));
  }, [dataSource]);

  useDeepCompareEffect(() => {
    if (!_.isNil(currentAlphName)) {
      updateDataCollapse(
        _.upperFirst(currentAlphName).slice(0, 1),
        currentAlphName,
        {
          active: true,
          expand: true,
        },
      );
    }
  }, [currentAlphName]);

  const result = (
    <div className="alph-index-container" ref={alphRef}>
      <ApphIndexList theme={token} className="alph-index-list">
        <Anchor
           affix={false}
          direction="vertical"
          items={finalDataSource.map((item) => {
            return {
              key: item.name,
              href: `#${item.name}`,
              title: item.name,
              className: 'alph-index-item',
            };
          })}
        />
      </ApphIndexList>
      <ApphIndexContent>
        {finalDataSource?.map((item) => {
          return (
            <div
              key={item.name}
              id={item.name}
              style={{ marginBottom: token.margin }}
            >
              <Typography.Title level={5}>{item.name}</Typography.Title>
              <Row
                className="alph-index-content"
                gutter={16}
                style={{ marginBottom: token.margin }}
              >
                {item.list.map((child) => {
                  return (
                    <Col
                      md={24}
                      xl={24}
                      xxl={12}
                      key={`${child.name}-${item.name}`}
                      style={{ marginBottom: token.margin }}
                    >
                      <ProCard
                        title={child.name}
                        className={classNames(
                          child.expand || child.active
                            ? 'alph-pro-card-expand'
                            : '',
                        )}
                        headerBordered
                        collapsible
                        defaultCollapsed
                        collapsed={!child.expand}
                        onCollapse={(collapse) => console.log(collapse)}
                        extra={
                          <RightOutlined
                            className={'extra-expand-container'}
                            rotate={child.expand ? 90 : undefined}
                            onClick={() => {
                              handleCollapse(item, child);
                            }}
                          />
                        }
                      >
                        {child.expand ? (
                          <>
                            {platformType === PlatformDataTypeEnum.METHOD ? (
                              <MethodItem
                                bordered={false}
                                column={1}
                                methodName={child.name}
                              />
                            ) : (
                              <DatasetItem
                                bordered={false}
                                column={1}
                                datasetName={child.name}
                              />
                            )}
                          </>
                        ) : null}
                      </ProCard>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </ApphIndexContent>
    </div>
  );
  return result;
}
