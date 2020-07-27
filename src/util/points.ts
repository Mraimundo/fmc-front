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
