import axios, { Method } from 'axios';
import { ApiError } from 'config/constants';

import env from 'config/env';

const baseURL = process.env.REACT_APP_API_HOST;
const plugin = process.env.REACT_APP_API_PLUGIN;
const storageUrl = process.env.REACT_APP_STORAGE_HOST;
const headers = { Accept: 'application/json' };
const notAllowedReadOnlyMethods: (Method | undefined)[] = [
  'post',
  'POST',
  'put',
  'PUT',
  'delete',
  'DELETE',
  'PATCH',
  'patch',
];

let readOnly = false;

type Mode = 'write' | 'readonly';

const pluginApi = axios.create({
  baseURL: `${baseURL}/${plugin}/api/v1`,
  headers,
});

const vendavallApi = axios.create({
  baseURL: `${baseURL}/vendavall/api/v2`,
  headers,
});

const storageApi = axios.create({
  baseURL: storageUrl,
  headers: {
    'content-type': 'multipart/form-data',
    Accept: 'application/json',
  },
});

const coinQuotationApi = axios.create({
  baseURL: env.coinQuotationUrl,
});

const setToken = (token: string): void => {
  vendavallApi.defaults.headers.authorization = token;
  pluginApi.defaults.headers.authorization = token;

  pluginApi.interceptors.request.use(
    req => {
      if (readOnly && notAllowedReadOnlyMethods.includes(req.method)) {
        throw new ApiError('Operação não permitida');
      }

      return req;
    },
    error => {
      return Promise.reject(error);
    },
  );

  vendavallApi.interceptors.request.use(
    req => {
      if (readOnly && notAllowedReadOnlyMethods.includes(req.method)) {
        throw new ApiError('Operação não permitida');
      }

      return req;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

const setApiMode = (mode: Mode): void => {
  readOnly = mode === 'readonly';
};

export {
  pluginApi,
  vendavallApi,
  storageApi,
  coinQuotationApi,
  setToken,
  setApiMode,
};
