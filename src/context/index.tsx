import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContext } from 'styled-components';

import store from 'state/store';
import { disconnectedTheme } from 'styles/theme';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeContext.Provider value={disconnectedTheme}>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ThemeContext.Provider>
  </Provider>
);

export default AppProvider;
