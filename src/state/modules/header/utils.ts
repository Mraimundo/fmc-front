import { Badge } from './constants';

export const getParticipantBadgeByPortugueseTerm = (
  term: 'Água' | 'Semente' | 'Terra' | 'Raiz',
): Badge => {
  const portugueseTermsMap: { [key: string]: Badge } = {
    Água: Badge.Water,
    Semente: Badge.Seed,
    Terra: Badge.Land,
    Root: Badge.Root,
  };

  return portugueseTermsMap[term];
};
