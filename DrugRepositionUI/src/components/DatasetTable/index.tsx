import { CustomProTable, DatasetItem } from '@/components';
import { getDatasetListService } from '@/services';
import { Dataset } from '@/types';

export type DatasetTableProps = {
  dataSource?: Dataset[];
};

export const DatasetTable = (props: DatasetTableProps) => {
  const {  ...more } = props;

  return (
    <CustomProTable
      request={getDatasetListService}
      columns={DatasetItem.columns}
      rowKey={item => item.dataset_name}
      {...more}
    />
  );
};
