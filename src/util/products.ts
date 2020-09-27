export const formatProductsInput = (
  value: string | number,
  suffix = 'Kg/L',
) => {
  if (!Number(value)) return '';

  const amount = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(Number(value) / 100);

  return `${amount} ${suffix}`;
};
