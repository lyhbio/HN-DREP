export enum PlatformDataTypeEnum {
  METHOD = 'method',
  DATASET = 'dataset',
}

export enum EvalutionTypeEnum {
  OVERALL = 'overall',
  PERFORMANCE = 'performance',
  SCALABILITY = 'scalability',
  USABILITY = 'usability',
}

export enum AucAuprF1Enum {
  AUC = 'auc',
  AUPR = 'aupr',
  F1 = 'f1',
}

export const AucAuprF1EnumText: Record<AucAuprF1Enum, string> = {
  [AucAuprF1Enum.AUC]: 'AUC',
  [AucAuprF1Enum.AUPR]: 'AUPR',
  [AucAuprF1Enum.F1]: 'F1',
};

export enum TimeEnum {
  TIME = 'time',
}

export const TimeEnumText: Record<TimeEnum, string> = {
  [TimeEnum.TIME]: 'Time',
};

export enum MemoryEnum {
  MEMORY = 'memory',
}

export const MemoryEnumText: Record<MemoryEnum, string> = {
  [MemoryEnum.MEMORY]: 'Memory',
};


export const TimeHumanEnum: Record<TimeEnum, string> = {
  [TimeEnum.TIME]: 'time_human',
};
export const MemoryHumanEnum: Record<MemoryEnum, string> = {
  [MemoryEnum.MEMORY]: 'memory_human',
};

export const PlatformDataTypeEnumText: Record<PlatformDataTypeEnum, string> = {
  [PlatformDataTypeEnum.METHOD]: 'Methods',
  [PlatformDataTypeEnum.DATASET]: 'Datasets',
};

export const EvalutionTypeEnumText: Record<EvalutionTypeEnum, string> = {
  [EvalutionTypeEnum.OVERALL]: 'Overall',
  [EvalutionTypeEnum.PERFORMANCE]: 'Performance',
  [EvalutionTypeEnum.SCALABILITY]: 'Scalability',
  [EvalutionTypeEnum.USABILITY]: 'Usability',
};


export enum PredictTypeEnum {
  drug = 'drug',
  disease = 'disease',
}