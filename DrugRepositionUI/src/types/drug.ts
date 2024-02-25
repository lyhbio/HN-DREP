import { DiseaseSuggestData } from "./common";

export interface DrugInfo {
  atc_codes: string;
  brand_names: string;
  chemical_formula: string;
  d2_structure: string;
  d3_structure: string;
  drug_name: string;
  drugbank_id: string;
  smiles: string;
  synonyms: string;
  targets: string;
  type: string;
  weight: string;
}


export interface DiseaseInfo {
  disease_name?: string;
  disease_id?: string;
  disease_from?: string;
  omim_id?: string;
  mesh_id?: string;
  medgen_id?: string;
  do_id?: string;
  synonyms?: string;
  slimmappings?: string;
  definition?: string;
}


export type DiseaseFullInfo = DiseaseInfo & DiseaseSuggestData;