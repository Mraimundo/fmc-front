export const fixedPrecisionOf = (value: number, precision: number) => {
  return parseFloat(value.toFixed(precision));
};
