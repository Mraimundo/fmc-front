import { vendavallApi } from './api';

export const RegisterAccessLog = (page: string) => {
  vendavallApi.get(`access?page=${page}`);
};
