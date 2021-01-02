import { SimulationData } from '../interfaces/api-interface';

const simulationsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const simulatioData: SimulationData[] = simulationsIds.map(index => ({
  id: index,
  created: new Date(),
  client_group: 'AgroAmazônia',
  name: `Título da Simulação ${index}`,
  content: '',
  establishment_id: 842,
}));

export default simulatioData;
