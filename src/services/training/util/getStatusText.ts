import { Status, TRAINING_STATUS } from '../interfaces';

export default (status: Status): string => {
  switch (status) {
    case TRAINING_STATUS.AVAILABLE:
      return 'Disponível';
    case TRAINING_STATUS.INITIATED:
      return 'Iniciado';
    case TRAINING_STATUS.CLOSED:
      return 'Fechado';
    default:
      return 'Status desconhecido';
  }
};
