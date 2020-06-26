import theme from 'styles/theme';

export default {
  ...theme,
  news: {
    titleColor: '#193b4e',
    summaryColor: '#000',
    dateColor: '#000',
  },
  button: {
    ...theme.button,
    primary: {
      backgroundColor: '#193b4e',
      fontColor: '#fff',
      borderRadius: '10px',
    },
  },
};
