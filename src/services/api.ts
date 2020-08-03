import axios from 'axios';

import env from 'config/env';

const baseURL = process.env.REACT_APP_API_HOST;
const plugin = process.env.REACT_APP_API_PLUGIN;
const storageUrl = process.env.REACT_APP_STORAGE_HOST;
const pdfURL = process.env.REACT_APP_PDF_HOST;
const headers = { Accept: 'application/json' };

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

const pdfApi = axios.create({
  baseURL: pdfURL,
  headers: {
    Accept: 'application/json,application/pdf',
  },
});

const setToken = (token: string): void => {
  vendavallApi.defaults.headers.authorization = token;
  pluginApi.defaults.headers.authorization = token;
};

export const coinQuotation = axios.create({
  baseURL: env.coinQuotationUrl,
});

export { pluginApi, vendavallApi, storageApi, pdfApi, setToken };
