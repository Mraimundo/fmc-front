const baseURL = process.env.REACT_APP_API_HOST;

interface Request {
  filename: string;
  url: string;
}

export default ({ filename, url }: Request): string => {
  return `${baseURL}/download?name=${filename}&url=${url}`;
};
