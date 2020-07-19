import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import store from 'state/store';
import { disconnectedTheme } from 'styles/theme';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeContext.Provider value={disconnectedTheme}>
      <ToastProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
          <AuthProvider>{children}</AuthProvider>
        </MuiPickersUtilsProvider>
      </ToastProvider>
    </ThemeContext.Provider>
  </Provider>
);

export default AppProvider;
