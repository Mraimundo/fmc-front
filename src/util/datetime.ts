import { format, parseISO, getDay } from 'date-fns';

export const formatDate = (
  date: string | Date | number,
  formatMask = 'dd/MM/yyyy',
) => {
  if (!date) return '';
  let dateToFormat = date;
  if (typeof dateToFormat === 'string') {
    const splitDate = dateToFormat.split('/');
    if (splitDate.length > 1 && splitDate[2].length === 4) {
      const [d, m, y] = dateToFormat.split('/');
      dateToFormat = `${y}-${m}-${d}`;
    }
    dateToFormat = parseISO(dateToFormat);
  }

  return format(dateToFormat, formatMask);

  // return format(new Date(date), formatMask);
};

export const extractHourFromDate = (date: string | Date | number) => {
  if (!date) return '';

  let dateToFormat = date;
  if (typeof dateToFormat === 'string') {
    dateToFormat = parseISO(dateToFormat);
  }

  return format(dateToFormat, 'HH:mm');
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

const ptDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

export const getDayName = (date: string | Date | number): string => {
  if (!date) return '';

  let dateToFormat = date;
  if (typeof dateToFormat === 'string') {
    dateToFormat = parseISO(dateToFormat);
  }

  return ptDays[getDay(dateToFormat)] ?? '';
};
