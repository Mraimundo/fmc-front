const ufs = [
  { stateCode: 'AC', stateName: 'Acre' },
  { stateCode: 'AL', stateName: 'Alagoas' },
  { stateCode: 'AP', stateName: 'Amapá' },
  { stateCode: 'AM', stateName: 'Amazonas' },
  { stateCode: 'BA', stateName: 'Bahia' },
  { stateCode: 'CE', stateName: 'Ceará' },
  { stateCode: 'DF', stateName: 'Distrito Federal' },
  { stateCode: 'ES', stateName: 'Espírito Santo' },
  { stateCode: 'GO', stateName: 'Goiás' },
  { stateCode: 'MA', stateName: 'Maranhão' },
  { stateCode: 'MT', stateName: 'Mato Grosso' },
  { stateCode: 'MS', stateName: 'Mato Grosso do Sul' },
  { stateCode: 'MG', stateName: 'Minas Gerais' },
  { stateCode: 'PA', stateName: 'Pará' },
  { stateCode: 'PB', stateName: 'Paraíba' },
  { stateCode: 'PR', stateName: 'Paraná' },
  { stateCode: 'PE', stateName: 'Pernambuco' },
  { stateCode: 'PI', stateName: 'Piauí' },
  { stateCode: 'RJ', stateName: 'Rio de Janeiro' },
  { stateCode: 'RN', stateName: 'Rio Grande do Norte' },
  { stateCode: 'RS', stateName: 'Rio Grande do Sul' },
  { stateCode: 'RO', stateName: 'Rondônia' },
  { stateCode: 'RR', stateName: 'Roraima' },
  { stateCode: 'SC', stateName: 'Santa Catarina' },
  { stateCode: 'SP', stateName: 'São Paulo' },
  { stateCode: 'SE', stateName: 'Sergipe' },
  { stateCode: 'TO', stateName: 'Tocantins' },
];

export interface State {
  stateCode: string;
  stateName: string;
}

export default async (): Promise<State[]> => {
  return ufs;
};
