import { shade, rgba } from 'polished';

export default {
  font: {
    color: {
      primary: '#808285',
      secondary: '#e63027',
      tertiary: '#fff',
    },
  },
  layout: {
    primary: {
      backgroundColor: '#efefef',
    },
    secondary: {
      backgroundColor: '#fff',
    },
  },
  regulation: {
    primary: {
      backgroundColor: '#fff',
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#fff',
      fontColor: '#312e38',
      borderColor: '#312e38',
      openIconColor: '#193f4e',
      closeIconColor: '#d7d8da',
      backgroundOpenIconColor: '#d7d8da',
      backgroundCloseIconColor: '#193f4e',
    },
    secondary: {
      backgroundColor: '#fff',
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#312e38',
      fontColor: '#312e38',
      borderColor: '#312e38',
      openIconColor: '#193f4e',
      closeIconColor: '#d7d8da',
      backgroundOpenIconColor: '#d7d8da',
      backgroundCloseIconColor: '#193f4e',
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
      backgroundColor: '#fff',
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#fff',
    },
    secondary: {
      backgroundColor: '#e63027',
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#e63027',
    },
  },
  input: {
    primary: {
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
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#fff',
    },
    secondary: {
      borderColor: '#808285',
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
      scrollBarColor: '#c6c6c6',
      scrollBarBackgroundColor: '#fff',
    },
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
      backgroundColor: '#808285',
      fontColor: '#fff',
      borderRadius: '7px',
    },
    tertiary: {
      backgroundColor: '#193f4e',
      fontColor: '#d7d8da',
      borderRadius: '7px',
    },
    quaternary: {
      backgroundColor: '#fff',
      fontColor: '#e63027',
      borderRadius: '7px',
    },
  },
  link: {
    fontColor: '#808285',
  },
  table: {
    primary: {
      thead: {
        tr: {
          backgroundColor: '#232129',
          color: '#fff',
        },
      },
      tbody: {
        tr: {
          borderColor: '#f5f5f5',
          borderWidth: '8px',
          color: '#707070',
        },
        td: {
          backgroundColor: '#fff',
        },
      },
    },
    secondary: {
      thead: {
        tr: {
          backgroundColor: '#232129',
          color: '#fff',
        },
      },
      tbody: {
        tr: {
          borderColor: '#f5f5f5',
          borderWidth: '8px',
          color: '#707070',
        },
        td: {
          backgroundColor: '#fff',
        },
      },
    },
  },
};
