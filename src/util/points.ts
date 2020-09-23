export const formatPoints = (
  value: number,
  minFractionDigits = 2,
  maxFractionDigits = 2,
) =>
  value.toLocaleString('pt-br', {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
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

/*
  Alterado o nome da função para fake, pois o mesmo formata para o PT/BR mesmo agora,
  será necessário refator aqui e quem usa essa func. No momento pela pressa do cliente
  de algo que ja está em produção, apenas foi decidido que toda visualização de dollar
  seria no padrão real mesmo, para nao perder as referencias no momento de onde está mostrando
  os números em Dollar, a função foi renomeada para 'fakeFormarDollar'
*/
export const fakeFormatDollars = (
  value: number,
  minFractionDigits = 2,
  maxFractionDigits = 2,
) =>
  value.toLocaleString('pt-br', {
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
