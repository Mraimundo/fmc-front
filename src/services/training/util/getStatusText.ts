import { Status, TRAINING_STATUS } from '../interfaces';

export default (status: Status): string => {
  switch (status) {
    case TRAINING_STATUS.AVAILABLE:
      return 'Disponível';
    case TRAINING_STATUS.FINISHED:
      return 'Finalizado';
    default:
      return 'Status desconhecido';
  }
};
