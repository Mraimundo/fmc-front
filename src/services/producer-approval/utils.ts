import { formatDate } from 'util/datetime';

const EXPORT_FILE_NAME = 'Aprovação de Cadastros';

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'approved':
      return 'Aprovados';
    case 'waiting':
      return 'Em Aprovação';
    case 'rejected':
      return 'Reprovados';
    default:
      return '';
  }
};

export const buildFileName = (status: string) => {
  const statusLabel = getStatusLabel(status);

  const filename = `${EXPORT_FILE_NAME} - ${statusLabel} - ${formatDate(
    new Date(),
    'yyyy-MM-dd-HH:mm:ss',
  )}.xlsx`;

  return filename;
};
