import { format, parseISO } from 'date-fns';

export const formatDate = (date: string, formatMask = 'dd/MM/yyyy') => {
  if (!date) return '';

  return format(parseISO(date), formatMask);

  // return format(new Date(date), formatMask);
};

export const extractHourFromDate = (date: string) => {
  if (!date) return '';

  return format(new Date(date), 'HH:mm');
};

export const ptMonths = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const getMonthName = (monthNumber: number): string => {
  if (monthNumber < 1 || monthNumber > 12) return '';
  return ptMonths[monthNumber - 1];
};
