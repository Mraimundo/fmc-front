export const formatPoints = (value: number) =>
  value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const formatPointsInput = (value: string | number) => {
  if (!Number(value)) return '';

  const amount = formatPoints(Number(value) / 100);

  return `${amount}`;
};

export const formatRebatePointsInput = (value: string | number) => {
  if (!Number(value)) return '';

  const amount = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(Number(value) / 100);

  return `${amount} pontos`;
};

export const formatPointsExtract = (value: number) =>
  value.toLocaleString('pt-br', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

export const formatQuotedCoin = (value: number) =>
  value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });

export const formatDollars = (
  value: number,
  minFractionDigits = 2,
  maxFractionDigits = 2,
) =>
  value.toLocaleString('en-US', {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  });

export const formatKgl = (value: number) =>
  new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(value);

export const formatPercent = (value: number) =>
  value.toLocaleString('pt-br', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
