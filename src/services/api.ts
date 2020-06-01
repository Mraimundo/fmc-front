import axios from 'axios';

const baseURL = process.env.REACT_APP_API_HOST;
const plugin = process.env.REACT_APP_API_PLUGIN;
const storageUrl = process.env.REACT_APP_STORAGE_HOST;
const headers = { Accept: 'application/json' };

const pluginApi = axios.create({
  baseURL: `${baseURL}/${plugin}/api/v2`,
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

export { pluginApi, vendavallApi, storageApi };
