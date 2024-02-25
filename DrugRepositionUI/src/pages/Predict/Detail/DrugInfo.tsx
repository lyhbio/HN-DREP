import { ProCard } from '@ant-design/pro-components';

import { DrugItem } from '@/components';

export type DrugInfoProps = {
  drugId?: string;
};

export const DrugInfo = (props: DrugInfoProps) => {
  const { drugId } = props;

  return (
    <ProCard title="Drug Info" bordered headerBordered>
      <DrugItem drugId={drugId} />
    </ProCard>
  );
};
