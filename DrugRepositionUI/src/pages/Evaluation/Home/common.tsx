import { history } from '@umijs/max';

const gotoDatasetDetail = (datasetName: string) => {
  history.push(`/evaluation/dataset-detail?dataset_name=${datasetName}`);
};

const gotoMethodDetail = (methodName: string) => {
  history.push(`/evaluation/method-detail?method_name=${methodName}`);
};

const gotoDatasetMethodDetail = (methodName: string, datasetName: string) => {
  history.push(
    `/evaluation/method-dataset-detail?method_name=${methodName}&dataset_name=${datasetName}`,
  );
};

export { gotoDatasetDetail, gotoDatasetMethodDetail, gotoMethodDetail };
