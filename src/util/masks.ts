export const cpfMask = (cpf: string): string => {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const cellPhoneMask = (phone: string) => {
  return phone.replace(/\D/g, '').replace(/(\d)(\d{4})$/, '$1-$2');
};
