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
export const DM = 'DM';
export const CRM = 'CRM';
export const MKT = 'MKT';
export const RTC = 'RTC';
export const KAM = 'KAM';
export const GRM = 'GRM';
export const GC = 'GC';

export type ApproverProfile =
  | typeof GRV
  | typeof DN
  | typeof DM
  | typeof CRM
  | typeof MKT
  | typeof RTC
  | typeof KAM
  | typeof GRM
  | typeof GC;

export const PROFILES = {
  focalPoint: 'FOCALPOINT',
  fmc: 'FMC',
  participant: 'PARTICIPANTE',
  producer: 'PRODUTOR',
};

export type IProfile =
  | typeof PROFILES.focalPoint
  | typeof PROFILES.fmc
  | typeof PROFILES.participant
  | typeof PROFILES.producer;

export const REGULATIONS_TYPE = {
  dataTerm: 'data_term',
  regulationOfCampaign: 'regulation_of_campaign',
  safraTerm: 'safra_term',
  promotionRegulation: 'promotion_regulation',
};

export const VENDAVALL_PARTICIPANT_STATUS = (statusNumber: number): string => {
  const statusMap: { [key: number]: string } = {
    [PRECHARGE]: 'Pré cadastro',
    [ACTIVE]: 'Ativo',
    [INACTIVE]: 'Inativo',
    [APPROVAL]: 'Aprovado',
    [REPROVED]: 'Reprovado',
    [CATALOG]: 'Catálogo',
    [TO_CONFIRM]: 'Em confirmação',
    [BLOCKED]: 'Bloqueado',
    [REJECTED]: 'Rejeitado',
    [BLACKLIST]: 'Blacklist',
    [REGISTER_TO_COMPLETE]: 'Completar cadastro',
  };

  return statusMap[statusNumber] || 'Status não mapeado';
};

export const socialMediaLinks = {
  instagram: 'https://www.instagram.com/fmcagricola/',
  facebook: 'https://www.facebook.com/fmcagricola/',
  linkedin: 'https://www.linkedin.com/company/fmc-agricola',
  youtube: 'https://www.youtube.com/user/FmcAgricolaBrasil',
  site: 'https://www.fmcagricola.com.br/',
};

export const appDownloadLinks = {
  juntos: {
    googlePlay:
      'https://play.google.com/store/apps/details?id=br.com.juntosfmc.app',
    appleStore: 'https://apps.apple.com/br/app/juntos-fmc/id1523719913',
  },
  fmc: {
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.oomovil.fmc&hl=en_US',
    appleStore: 'https://apps.apple.com/br/app/fmc-agr%C3%ADcola/id830744935',
  },
};

export enum EstablishmentTypes {
  Resale = 'Revenda',
  Cooperative = 'Cooperativa',
}

export enum EstablishmentCategory {
  water = 'Água',
  seed = 'Semente',
  earth = 'Terra',
  root = 'Raiz',
}

export const EstablishmentCategories = [
  EstablishmentCategory.water,
  EstablishmentCategory.seed,
  EstablishmentCategory.earth,
  EstablishmentCategory.root,
];

interface TApiError {
  data: { message: string };
}

export class ApiError {
  response: TApiError;

  constructor(message: string) {
    this.response = { data: { message } };
  }
}
