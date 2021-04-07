import { Farmer, Summary, FilterOptions } from './interface';
import { participants, resume } from './mock';

const FARMERS_RESOURCE = '/farmer';
const SUMMARY_RESOURCE = '/farmer/count';

export const getFarmers = ({
  status,
  search,
}: FilterOptions): Promise<Farmer[]> => {
  return new Promise<Farmer[]>(resolve => {
    let url = `${FARMERS_RESOURCE}?status=${status}`;

    if (search) url += `&search=${search}`;
    console.log('TESTING', url);
    setTimeout(() => {
      resolve(participants);
    }, 3500);
  });
};

export const getSummary = (): Promise<Summary> => {
  return new Promise<Summary>(resolve => {
    setTimeout(() => {
      resolve(resume);
    }, 1800);
  });
};
