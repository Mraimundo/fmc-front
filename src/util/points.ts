export const formatPoints = (points: string | number, maxDigits = 2) => {
  const format = (number: number) =>
    number.toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: maxDigits,
    });

  if (typeof points === 'string') {
    return format(Number.parseFloat(points));
  }

  return format(points);
};

const numberAccept = /[\d.]+/g;
export const parseNumber = (string: string) =>
  (string.match(numberAccept) || []).join('');

const formatFloatingPointNumber = (value: string, maxDigits: number) => {
  const parsed = parseNumber(value);
  const [head, tail] = parsed.split('.');
  const scaledTail = tail != null ? tail.slice(0, maxDigits) : '';

  const number = Number.parseFloat(`${head}.${scaledTail}`);

  if (Number.isNaN(number)) {
    return '';
  }

  const formatted = formatPoints(number, maxDigits);

  if (parsed.includes('.')) {
    const [formattedHead] = formatted.split('.');

    const formattedTail =
      scaledTail !== '' && scaledTail[maxDigits - 1] === '0'
        ? scaledTail.slice(0, -1)
        : scaledTail;

    return `${formattedHead}.${formattedTail}`;
  }
  return formatted;
};

export const formatCurrency = (string: string) =>
  formatFloatingPointNumber(string, 2);
