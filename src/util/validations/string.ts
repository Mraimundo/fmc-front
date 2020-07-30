export const hasLowerCase = (str: string): boolean => {
  return /[a-záàâãéèêíïóôõöúçñ]/.test(str);
};

export const hasUpperCase = (str: string): boolean => {
  return /[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/.test(str);
};

export const hasNumber = (str: string): boolean => {
  return /[0-9]/.test(str);
};

export const hasSpecialCharacteres = (str: string): boolean => {
  return /[!$#%@&]/.test(str);
};
