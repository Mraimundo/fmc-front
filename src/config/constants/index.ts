import {
  PRECHARGE,
  ACTIVE,
  INACTIVE,
  APPROVAL,
  REPROVED,
  CATALOG,
  TO_CONFIRM,
  BLOCKED,
  REJECTED,
  BLACKLIST,
  REGISTER_TO_COMPLETE,
} from './vendavallStatus';

export const GRV = 'GRV';
export const DN = 'DN';
export const CRM = 'CRM';
export const MKT = 'MKT';
export const RTC = 'RTC';
export const KAM = 'KAM';
export const GRM = 'GRM';

export type IProfile = 'FOCALPOINT' | 'FMC' | 'PARTICIPANTE';
export type ApproverProfile =
  | typeof GRV
  | typeof DN
  | typeof CRM
  | typeof MKT
  | typeof RTC
  | typeof KAM
  | typeof GRM;

export const PROFILES = {
  focalPoint: 'FOCALPOINT',
  fmc: 'FMC',
  participant: 'PARTICIPANTE',
};

export const REGULATIONS_TYPE = {
  dataTerm: 'data_term',
  regulationOfCampaign: 'regulation_of_campaign',
  safraTerm: 'safra_term',
};

export const VENDAVALL_PARTICIPANT_STATUS = (statusNumber: number): string => {
  switch (statusNumber) {
    case PRECHARGE:
      return 'Pré cadastro';
    case ACTIVE:
      return 'Ativo';
    case INACTIVE:
      return 'Inativo';
    case APPROVAL:
      return 'Aprovado';
    case REPROVED:
      return 'Reprovado';
    case CATALOG:
      return 'Catálogo';
    case TO_CONFIRM:
      return 'Em confirmação';
    case BLOCKED:
      return 'Bloqueado';
    case REJECTED:
      return 'Rejeitado';
    case BLACKLIST:
      return 'Blacklist';
    case REGISTER_TO_COMPLETE:
      return 'Completar cadastro';
    default:
      return 'Status não mapeado';
  }
};
