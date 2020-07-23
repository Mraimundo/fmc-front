export const getNameAbbr = (name: string): string => {
  if (!name) return 'AA';

  const parts = name.split(' ');

  if (parts.length === 1) return name.substr(0, 2).toUpperCase();

  const getFirstLetter = (str: string) => str.charAt(0).toUpperCase();

  const firstNameInitial = getFirstLetter(parts[0]);
  const lastNameInitial = getFirstLetter(parts[parts.length - 1]);

  return `${firstNameInitial}${lastNameInitial}`;
};

export const getFirstAndLastName = (name: string): string => {
  if (!name) return '';

  const parts = name.split(' ');

  if (parts.length === 1) return name;

  return `${parts[0]} ${parts[parts.length - 1]}`;
}

export const limitChars = (term: string, limit = 100): string => {
  if (!term) return '';

  if (term.length > limit) return `${term.substr(0, limit)}...`;

  return term;
}
