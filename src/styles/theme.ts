import { shade, rgba } from 'polished';

export default {
  font: {
    color: {
      primary: '#808285',
      secondary: '#e63027',
      tertiary: '#fff',
    },
  },
  menu: {
    activeBackgroundColor: rgba(255, 255, 255, 0.3),
    inactiveBackgroundColor: rgba(255, 255, 255, 0),
  },
  contact: {
    ballon: {
      backgroundColor: '#e63027',
    },
  },
  modal: {
    primary: {
      backgroundColor: '#312e38',
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#312e38',
    },
    secondary: {
      backgroundColor: '#312e38',
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#312e38',
    },
  },
  input: {
    borderColor: '#e63027',
    backgroundColor: '#fff',
    fontColor: '#808285',
    iconColor: '#808285',
    placeholderColor: '#808285',
    errorIconColor: '#e63027',
    errorBorderColor: '#e63027',
    focusedBorderColor: shade(0.3, '#e63027'),
    filledIconColor: '#e63027',
    filledBorderColor: '#e63027',
    labelFontColor: '#e63027',
    borderRadius: '0px',
    borderWidth: '1px',
    errorBorderWidth: '1px',
    focusedBorderWidth: '1px',
    filledBorderWidth: '1px',
  },
  tooltip: {
    error: {
      borderColor: '#e63027',
      backgroundColor: '#e63027',
      fontColor: '#f4ede8',
    },
    success: {
      borderColor: '#00cc00',
      backgroundColor: '#00cc00',
      fontColor: '#312e38',
    },
    info: {
      borderColor: '#ff9000',
      backgroundColor: '#ff9000',
      fontColor: '#312e38',
    },
  },
  button: {
    primary: {
      backgroundColor: '#e63027',
      fontColor: '#fff',
      borderRadius: '7px',
    },
    secondary: {
      backgroundColor: '#ff9000',
      fontColor: '#312e38',
      borderRadius: '7px',
    },
  },
  link: {
    fontColor: '#808285',
  },
};
