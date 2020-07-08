export const getNameAbbr = (name: string): string => {
  if (!name) return 'AA';

  const parts = name.split(' ');

  if (parts.length === 1) return name.substr(0, 2).toUpperCase();

  const getFirstLetter = (str: string) => str.charAt(0).toUpperCase();

  const firstNameInitial = getFirstLetter(parts[0]);
  const lastNameInitial = getFirstLetter(parts[parts.length - 1]);

  return `${firstNameInitial}${lastNameInitial}`;
};
