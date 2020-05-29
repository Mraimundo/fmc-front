import React from 'react';
import { ThemeContext } from 'styled-components';

import theme from 'styles/theme';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <ThemeContext.Provider value={theme}>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </ThemeContext.Provider>
);

export default AppProvider;
