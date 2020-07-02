import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContext } from 'styled-components';

import store from 'state/store';
import theme from 'styles/theme';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { MenuProvider } from './MenuContext';

const AppProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeContext.Provider value={theme}>
      <ToastProvider>
        <AuthProvider>
          <MenuProvider>{children}</MenuProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeContext.Provider>
  </Provider>
);

export default AppProvider;
