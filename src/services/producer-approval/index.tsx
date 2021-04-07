import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Farmer, Summary, FilterOptions } from './interface';
import { getParticipantsList, resume } from './mock';

const FARMERS_RESOURCE = '/farmer';
const SUMMARY_RESOURCE = '/farmer/count';

interface ApiResponse {
  data: Farmer[];
  pagination: Pagination;
}

export const getFarmers = ({
  status,
  search,
  page = 1,
}: FilterOptions): Promise<ApiResponse> => {
  return new Promise<ApiResponse>(resolve => {
    let url = `${FARMERS_RESOURCE}?status=${status}`;

    if (search) url += `&search=${search}`;

    url += `&page=${page}&limit=6`;

    const participants = getParticipantsList(page);
    console.log('GET FARMERS', url);
    setTimeout(() => {
      resolve({
        data: participants,
        pagination: {
          current_page: page,
          last_page: 3,
          per_page: 6,
          total: 15,
          page_total: 3,
        },
      });
    }, 3500);
  });
};

export const getSummary = (): Promise<Summary> => {
  return new Promise<Summary>(resolve => {
    setTimeout(() => {
      resolve(resume);
      console.log('GET SUMMARY', SUMMARY_RESOURCE);
    }, 1800);
  });
};
