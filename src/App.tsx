import dotenv from 'dotenv';
import React from 'react';
import { Router } from 'react-router-dom';

import history from 'services/history';

import GlobalStyle from 'styles/global';
import Routes from 'routes';
import AppProvider from 'context';

import accessLoger from './services/accessLogger';

dotenv.config();

/**
 * Ao carregar a aplicação, envia um pageView da url atual
 */
accessLoger.pageView(window.location.pathname);

/**
 * Registra pageViews quando a rota é alterada
 */
history.listen(location => {
  accessLoger.pageView(location.pathname);
});

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
