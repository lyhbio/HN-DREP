import { PaginatorParams, Reference } from './common';
import { Method } from './method';

export interface DatasetParams {
  dataset_name: string;
}

export interface Dataset {
  dataset_name: string;
  disease_num: number;
  drug_disease_associations: number;
  drug_num: number;
  methods?: Method[];
  paper: string;
  ref_id: string;
  references: Reference[];
}

export interface MethodDataset {
  auc: string;
  aupr: string;
  dataset_name: string;
  f1: string;
  method_name: string;
  memory: string;
  memory_human: string;
  time: string;
  time_human: string;

}

export interface HomeDatasetData {
  datasets: string[];
  methods: string[];
  methods_datasets: MethodDataset[];
}

export interface SearchDatasetMethodParams extends PaginatorParams {
  dataset_name?: string;
  method_name?: string;
  disease_id?: string;
  disease_name?: string;
  drugbank_id?: string;
  group_field?: 'dataset_name' | 'method_name'
}

export interface SearchDatasetMethodData {
  drugbank_id: string;
  dataset_name?: string;
  drug_name: string;
  disease_id: string;
  disease_name: string;
  disease_from: string;
  method_name: string;
  score: string;
}

export interface StatisticsData {
  dataset_count: number;
  disease_count: number;
  drug_count: number;
  drug_disease_count: number;
  method_count: number;
}
