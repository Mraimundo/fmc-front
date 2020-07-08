import { makeStyles } from '@material-ui/core';
import { DefaultTheme } from 'styled-components';

export const useStyles = (
  theme: DefaultTheme,
  inputRole: 'primary' | 'secondary',
) =>
  makeStyles({
    listbox: {
      background: theme.input[inputRole].backgroundColor,
    },
    option: {
      color: theme.input[inputRole].fontColor,
    },
    noOptions: {
      background: theme.input[inputRole].backgroundColor,
      color: theme.input[inputRole].fontColor,
    },
    input: {
      border: 'none',
    },
    popupIndicator: {
      color: theme.input[inputRole].iconColor,
    },
    clearIndicator: {
      color: theme.input[inputRole].iconColor,
    },
    root: {
      background: 'transparent',
      width: '100%',
      borderRadius: theme.input[inputRole].borderRadius,
      border: 'none',
    },
  })();
