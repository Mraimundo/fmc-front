import dotenv from 'dotenv';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import history from 'services/history';

import GlobalStyle from 'styles/global';
import Routes from 'routes';
import AppProvider from 'context';

dotenv.config();

const App: React.FC = () => (
  <>
    <AppProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
