import React from 'react';
import { ThemeContext } from 'styled-components';

import theme from 'styles/theme';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <ThemeContext.Provider value={theme}>
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  </ThemeContext.Provider>
);

export default AppProvider;
