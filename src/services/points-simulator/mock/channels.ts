import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import { Channel } from '../interfaces/api-interface';

const channels: Channel[] = [
  {
    id: 1,
    name: 'Estabelecimento Teste 1',
    client_group: 'Teste 1',
    client_code: 'Teste 1',
    type: EstablishmentTypes.Resale,
    category: EstablishmentCategory.earth,
  },
  {
    id: 2,
    name: 'Estabelecimento Teste 2',
    client_group: 'Teste 2',
    client_code: 'Teste 2',
    type: EstablishmentTypes.Cooperative,
    category: EstablishmentCategory.earth,
  },
];

export default channels;
