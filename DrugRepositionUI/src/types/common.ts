import { DataNode } from 'antd/es/tree';
import { SortOrder } from 'antd/lib/table/interface';
export interface Reference {
  ref_id: string;
  title: string;
  url: string;
  pmid: number;
  dois: string;
}

export interface PaginatorParams {
  current?: number;
  pageSize?: number;
  current_page?: number;
  per_page?: number;
}

export interface Paginator extends PaginatorParams {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
}

export interface SearchSuggestParams {
  keywords?: string;
}

export interface DrugSuggestData {
  drugbank_id: string;
  drug_name: string;
}

export interface DiseaseSuggestData {
  disease_id?: string;
  disease_name: string;
  disease_from?: string;
  disease_uuid?: string;
}

export interface ApiResponse<T> {
  status_code: string;
  message: string;
  success?: boolean;
  data: T;
  paginator?: Paginator;
}

export type PerfermenceValueType = 'f1' | 'aupr' | 'auc';

export type AntdPageParams = {
  pageSize?: number;
  current?: number;
};

export type CommonSortOrder = SortOrder;

export type SortParams = Record<string, CommonSortOrder>;

export type RequestParams = AntdPageParams & {
  sort?: SortParams;
};


export type DownloadFile  = {
  name: string;
  path: string;
  size: number;
  type?: 'directory' | "file",

}


export type DownloadNodeData = DownloadFile & DataNode & {
  children?:  (DownloadFile & DataNode) []
}


