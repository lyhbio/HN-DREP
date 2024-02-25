import {
  ProColumns,
  ProDescriptions,
  ProDescriptionsProps,
} from '@ant-design/pro-components';
import { history, useRequest } from '@umijs/max';

import { Space, Typography } from 'antd';

import { dealDescriptionColumns, isEmpty, splitProDescriptionText } from '@/common';
import { BLANK_PLACEHOLDER, COMMON_COLUMN } from '@/constants';
import { PredictTypeEnum } from '@/enums';
import { getDrugInfoService } from '@/services';
import { DrugInfo } from '@/types';

import { useMemo } from 'react';
import { CustomImage, ThreeDigitModel } from '../index';

export type DrugItemProps = {
  dataSource?: DrugInfo;
  drugId?: string;
};

const drugNameColumn = {
  dataIndex: 'drug_name',
  title: 'DrugName',
  width: 300,
  render(text, record) {
    const _text = record['drug_name'] || record['name'];
    const _id =record.drugbank_id ||  record.id;
    return isEmpty(_text) ? (
      BLANK_PLACEHOLDER
    ) : (
      <Typography.Link
        onClick={() => {
          history.push(
            `/predict/detail?type=${PredictTypeEnum.drug}&id=${_id}&name=${_text}`,
          );
        }}
      >
        {_text}
      </Typography.Link>
    );
  },
};

const drugIdColumn = {
  dataIndex: 'drugbank_id',
  title: 'DrugBankID',
  width: 120,
  render(text) {
    return isEmpty(text) ? (
      BLANK_PLACEHOLDER
    ) : (
      <Typography.Link
        target="_blank"
        href={`https://go.drugbank.com/drugs/${text}`}
      >
        {text}
      </Typography.Link>
    );
  },
};

const drugCommonColumns: ProColumns<any>[] = [drugNameColumn, drugIdColumn];

export const DrugItem = (props: DrugItemProps) => {
  const { dataSource, drugId } = props;

  const { data: drugInfo, loading } = useRequest(
    drugId
      ? () => getDrugInfoService(drugId)
      : () => {
          return dataSource;
        },
    {
      ready: !isEmpty(drugId),
    },
  );

  const columns: ProColumns<DrugInfo>[] = useMemo(() => {
    return [
      ...drugCommonColumns,
      {
        dataIndex: 'targets',
        title: 'Target',
        render(text) {
          const _text = text as string;
          const textArray = _text?.split('|');
          return isEmpty(text) ? (
            BLANK_PLACEHOLDER
          ) : (
            <Space wrap>
              {textArray.map((item) => {
                return (
                  <Typography.Link
                    key={item}
                    target="_blank"
                    href={`https://www.uniprot.org/uniprotkb/${item}/entry`}
                  >
                    {item}
                  </Typography.Link>
                );
              })}
            </Space>
          );
        },
      },
      {
        dataIndex: 'type',
        title: 'Type',
      },
      {
        dataIndex: 'synonyms',
        title: 'Synonyms',
      },
      {
        dataIndex: 'brand_names',
        title: 'Brand Name',
      },
      {
        dataIndex: 'weight',
        title: 'Weight',
      },
      {
        dataIndex: 'chemical_formula',
        title: 'Chemical Formula',
      },
      {
        dataIndex: 'atc_codes',
        title: 'ATC Codes',
        render(text) {
          return splitProDescriptionText(text);
        },
      },
      {
        dataIndex: 'smiles',
        title: 'Smiles',
      },
      {
        dataIndex: 'd2_structure',
        title: '2D Structure',
        span: 1,
        render(text, row) {
          return (
            <CustomImage src={row['d2_structure']} height={300} width={300} />
          );
        },
      },
      {
        dataIndex: 'd3_structure',
        title: '3D Structure',
        span: 1,
        render(text, row) {
          return (
            <ThreeDigitModel
              data={row['d3_structure']}
              downloadInfo={{
                fileName: drugInfo?.drug_name,
              }}
            />
          );
        },
      },
    ];
  }, [drugInfo?.drug_name]);

  return (
    <>
      <ProDescriptions
        size="small"
        column={COMMON_COLUMN}
        dataSource={drugInfo}
        loading={loading}
        bordered
        columns={dealDescriptionColumns<DrugInfo>(
          columns as ProDescriptionsProps<DrugInfo>['columns'],
          drugInfo,
        )}
      />
    </>
  );
};

DrugItem.drugNameColumn = drugNameColumn;
DrugItem.drugIdColumn = drugIdColumn; 
DrugItem.drugCommonColumns = drugCommonColumns;
