import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import { Channel } from '../interfaces/api-interface';

const channels: Channel[] = [
  {
    id: 1,
    name: 'Estabelecimento Teste 1',
    group_name: 'Teste 1',
    code: 'Teste 1',
    type: EstablishmentTypes.Resale,
    category: EstablishmentCategory.earth,
  },
  {
    id: 2,
    name: 'Estabelecimento Teste 2',
    group_name: 'Teste 2',
    code: 'Teste 2',
    type: EstablishmentTypes.Cooperative,
    category: EstablishmentCategory.earth,
  },
];

export default channels;
