import { Reference } from './common';
import { Dataset } from './dataset';
export interface Method {
  auc: string;
  aupr: string;
  f1: string;
  method_name: string;
  network: number;
  algorithms: string;
  languages: string;
  dataset_used: string;
  code_address: string;
  method_paper_name: string;
  ref_id: string;
  workflow: string;
  auc_curve: string;
  aupr_curve: string;
  references?: Reference[];
  datasets?: (Dataset & Partial<Method>)[];
}

export interface MethodParams {
  dataset_name?: string;
  method_name: string;
}

