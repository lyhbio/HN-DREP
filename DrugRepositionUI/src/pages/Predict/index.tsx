import {
  PageContainer,
  ProCard,
  ProColumns,
  ProSkeleton,
} from '@ant-design/pro-components';
import { history, useSearchParams } from '@umijs/max';
import {
  useDebounceFn,
  useDeepCompareEffect,
  useLocalStorageState,
  useMemoizedFn,
  useSafeState,
  useUnmount,
} from 'ahooks';
import {
  AutoComplete,
  AutoCompleteProps,
  Input,
  Radio,
  RadioProps,
  Result,
  Space,
  Spin,
} from 'antd';
import { useMemo } from 'react';

import { isEmpty } from '@/common';
import { CustomProTable, DiseaseItem, DrugItem } from '@/components';
import { PredictTypeEnum } from '@/enums';
import { getDiseaseSuggestService, getDrugSuggestService } from '@/services';
import { DiseaseSuggestData, DrugSuggestData } from '@/types';

import { CustomOptionLabel, CustomOptionTitle } from './Components';

export type OptionsType = {
  label: string;
  value: string;
};

export type Test = DrugSuggestData | DiseaseSuggestData;

const SEARCH_HISTORY_CACHE = 'SEARCH_HISTORY_CACHE';

const DEFAULT_SEARCH_HISTORY = {
  [PredictTypeEnum.disease]: [],
  [PredictTypeEnum.drug]: [],
};

const DEFAULT_SHOW_TAG = {
  [PredictTypeEnum.drug]: [
    {
      id: 'DB00006',
      name: 'Bivalirudin',
      key: 'DB00006',
    },
    {
      id: 'DB00006',
      name: 'Bivalirudin',
      key: 'Bivalirudin',
    },
  ],
  [PredictTypeEnum.disease]: [
    {
      id: '100300',
      name: 'ADAMS-OLIVER SYNDROME 1; AOS1',
      key: '100300',
    },
    {
      id: 'D014983',
      name: 'Xeroderma Pigmentosum',
      key: 'D014983',
    },
    {
      id: 'C0004096',
      name: 'Asthma',
      key: 'C0004096',
    },
  ],
};

const Predict = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useSafeState<string>('');
  const [hasFinishSearch, setHasFinishSearch] = useSafeState(false);

  const [searchHistory = DEFAULT_SEARCH_HISTORY, setSearchHistory] =
    useLocalStorageState<Record<PredictTypeEnum, string[]>>(
      SEARCH_HISTORY_CACHE,
      {
        defaultValue: DEFAULT_SEARCH_HISTORY,
      },
    );

  const defaultRadioType = (searchParams.get('type') ||
    PredictTypeEnum.drug) as PredictTypeEnum;
  const [radioType, setRadioType] =
    useSafeState<PredictTypeEnum>(defaultRadioType);
  const [autoCompleteOptions, setAutoCompleteOptions] = useSafeState<
    (Test & OptionsType)[]
  >([]);
  const [loading, setLoading] = useSafeState(false);

  const changeSearch: AutoCompleteProps['onChange'] = useMemoizedFn((value) => {
    setValue(value);
  });

  const changeRadioType: RadioProps['onChange'] = useMemoizedFn((e) => {
    history.push(`/predict?type=${e.target.value}`);
    setRadioType(e.target.value);
    setValue('');
  });

  const skipDetail = useMemoizedFn((options: OptionsType) => {
    history.push(
      `/predict/detail?type=${radioType}&id=${options.value}&name=${options.label}`,
    );
  });

  const updateSearchHistory = useMemoizedFn(
    (key: PredictTypeEnum, value: string) => {
      const addValueInCache = (currentValue: string) => {
        if (!searchHistory[PredictTypeEnum[key]].includes(currentValue)) {
          searchHistory[PredictTypeEnum[key]].unshift(currentValue);
        }
      };
      if (searchHistory[PredictTypeEnum[key]]) {
        if (searchHistory[PredictTypeEnum[key]].length < 10) {
          addValueInCache(value);
        } else {
          searchHistory[PredictTypeEnum[key]].pop();
          addValueInCache(value);
        }
      }
      setSearchHistory(searchHistory);
    },
  );

  const { run: getSuggestList } = useDebounceFn(
    async (type: PredictTypeEnum, keywords: string) => {
      let result: (Test & OptionsType)[] = [];
      setLoading(true);

      if (type === PredictTypeEnum.drug) {
        const res = await getDrugSuggestService({
          keywords,
        });
        result = res.data.map((item) => {
          return {
            ...item,
            label: item.drug_name,
            value: item.drugbank_id,
          };
        });
      }

      if (type === PredictTypeEnum.disease) {
        const res = await getDiseaseSuggestService({
          keywords,
        });
        result = res.data.map((item) => {
          return {
            ...item,
            label: item.disease_name,
            value: item.disease_id,
          };
        });
      }

      setLoading(false);
      setAutoCompleteOptions(result);
    },
    {
      wait: 500,
    },
  );

  const finishSearch = useMemoizedFn(() => {
    if (autoCompleteOptions.length === 1) {
      skipDetail(autoCompleteOptions[0]);
    } else {
      setHasFinishSearch(true);
    }
    updateSearchHistory(radioType, value);
  });

  const drugColumns: ProColumns<DrugSuggestData & OptionsType>[] =
    useMemo(() => {
      return DrugItem.drugCommonColumns;
    }, []);

  const diseaseColumns: ProColumns<DiseaseSuggestData & OptionsType>[] =
    useMemo(() => {
      return [...DiseaseItem.diseaseIdsColumns];
    }, []);

  const handleClear = useMemoizedFn(
    (type: PredictTypeEnum, clearValue?: string) => {
      if (isEmpty(clearValue)) {
        searchHistory[type] = [];
      } else {
        searchHistory[type] = searchHistory[type].filter(
          (item) => item !== clearValue,
        );
      }
      setSearchHistory({
        ...searchHistory,
      });
    },
  );

  useDeepCompareEffect(() => {
    if (!isEmpty(value)) {
      getSuggestList(radioType, value);
    }
    if (hasFinishSearch) {
      setHasFinishSearch(false);
    }
  }, [value, radioType]);

  useUnmount(() => {
    if (!isEmpty(value)) {
      updateSearchHistory(radioType, value);
    }
  });

  return (
    <PageContainer subTitle="Predicting drug-disease associations by integrating all evaluated methods">
      <ProCard title="Quick Search" bordered headerBordered>
        <>
          <div className="mb-md">
            <Radio.Group
              buttonStyle="solid"
              value={radioType}
              onChange={changeRadioType}
            >
              <Radio.Button value={PredictTypeEnum.drug}>Drug</Radio.Button>
              <Radio.Button value={PredictTypeEnum.disease}>
                Disease
              </Radio.Button>
            </Radio.Group>
          </div>
          <Spin spinning={loading}>
            <div>
              <AutoComplete
                style={{
                  width: '50%',
                }}
                onChange={changeSearch}
                value={value}
                options={
                  searchHistory[PredictTypeEnum[radioType]].length > 0
                    ? [
                        {
                          label: (
                            <CustomOptionTitle
                              onClear={() => {
                                handleClear(radioType);
                              }}
                            />
                          ),
                          options: searchHistory[
                            PredictTypeEnum[radioType]
                          ].map((item, index) => {
                            return {
                              label: (
                                <CustomOptionLabel
                                  onClear={() => {
                                    handleClear(radioType, item);
                                  }}
                                  text={item}
                                />
                              ),
                              key: index,
                              value: item,
                            };
                          }),
                        },
                      ]
                    : []
                }
                onSelect={(value: string) => {
                  const currentOption = autoCompleteOptions.find(
                    (item) => item.value === value,
                  );

                  if (currentOption) {
                    skipDetail(currentOption);
                  }
                }}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    finishSearch();
                  }
                }}
              >
                <Input.Search
                  size="large"
                  allowClear
                  placeholder={
                    radioType === PredictTypeEnum.drug
                      ? 'search for DrugBank ID or Drug name (EX: DB00006 or Bivalirudin)'
                      : 'search for MeSH ID / OMIM ID / DO ID / MedGen ID / Disease name / Synonyms'
                  }
                  enterButton
                  onSearch={finishSearch}
                />
              </AutoComplete>
            </div>
          </Spin>
          <Space className="mt-xl">
            Try
            {DEFAULT_SHOW_TAG[radioType].map((item) => {
              return (
                <div
                  style={{
                    cursor: 'pointer',
                    fontSize: '14px',
                    backgroundColor: '#D6E3F6',
                    color: '#006eff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                  }}
                  key={item.key}
                  onClick={() => {
                    skipDetail({
                      label: item.name,
                      value: item.id,
                    });
                  }}
                >
                  {item.key}
                </div>
              );
            })}
          </Space>
        </>
      </ProCard>
      {!isEmpty(value) ? (
        <ProCard
          title="Search Suggest"
          bordered
          headerBordered
          className="mt-md"
          loading={loading ? <ProSkeleton type="list" /> : null}
        >
          {autoCompleteOptions.length >= 1 ? (
            <CustomProTable
              customSticky={false}
              search={false}
              options={false}
              pagination={{
                pageSize: 16,
                showSizeChanger: false,
                hideOnSinglePage: true,
              }}
              rowKey={(record) => JSON.stringify(record)}
              dataSource={autoCompleteOptions}
              columns={
                radioType === PredictTypeEnum.drug
                  ? drugColumns
                  : diseaseColumns
              }
            />
          ) : (
            <Result
              status="warning"
              title="Sorry"
              subTitle={`We could not find anything in the Platform database that matches "${value}"`}
            />
          )}
        </ProCard>
      ) : null}
    </PageContainer>
  );
};

export default Predict;
