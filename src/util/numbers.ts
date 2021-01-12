export const fixedPrecisionOf = (value: number, precision = 2) => {
  const exp = 10 ** precision;
  return Math.round((value + Number.EPSILON) * exp) / exp;
};
