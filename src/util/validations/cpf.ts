const isRepeatingNumber = (str: string): boolean => /^(\d)(\1){10}$/.test(str);

export default (value: string): boolean => {
  const cpf = value.replace(/\D/g, ''); // .padStart(11, '0');

  if (
    cpf === '' ||
    cpf.length !== 11 ||
    !/^\d{11}$/.test(cpf) ||
    isRepeatingNumber(cpf)
  ) {
    return false;
  }

  const digits = cpf.split('').map(x => parseInt(x, 0));

  for (let j = 0; j < 2; j += 1) {
    let sum = 0;

    for (let i = 0; i < 9 + j; i += 1) {
      sum += digits[i] * (10 + j - i);
    }

    let checkDigit = 11 - (sum % 11);

    if (checkDigit === 10 || checkDigit === 11) {
      checkDigit = 0;
    }

    if (checkDigit !== digits[9 + j]) {
      return false;
    }
  }

  return true;
};
