import { ProCard } from '@ant-design/pro-components';

import { DiseaseItem } from '@/components';

export type DiseaseInfoProps = {
  diseaseId?: string;
  diseaseName?: string;
};

export const DiseaseInfo = (props: DiseaseInfoProps) => {
  const {  diseaseId } = props;

  return (
    <ProCard title="Disease Info" bordered headerBordered>
      <DiseaseItem  diseaseId={diseaseId} />
    </ProCard>
  );
};
