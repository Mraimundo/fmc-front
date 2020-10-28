import routeMap from 'routes/route-map';
import SignInUp from 'pages/Auth/SignInUp';
import Autologin from 'pages/Auth/Autologin';
import Sso from 'pages/Auth/Sso';
import FirstAccess from 'pages/Auth/FirstAccess';
import RegisterEdit from 'pages/Auth/RegisterEdit';
import Regulation from 'pages/Auth/Regulation';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/',
    component: SignInUp,
    accessPage: 'Página de login',
    isPublic: true,
  },
  {
    path: '/autologin',
    component: Autologin,
    accessPage: 'Página de login automático',
    special: true,
  },
  {
    path: '/auto-login',
    component: Autologin,
    accessPage: 'Página de login automático',
    special: true,
  },
  {
    path: '/login/auto-login',
    component: Autologin,
    accessPage: 'Página de login automático',
    special: true,
  },
  {
    path: '/login/autologin',
    component: Autologin,
    accessPage: 'Página de login automático',
    special: true,
  },
  {
    path: '/sso',
    component: Sso,
    accessPage: 'Página de login automático via SSO',
    special: true,
  },
  {
    path: '/firstAccess',
    component: FirstAccess,
    accessPage: 'Página de primeiro acesso',
    isPublic: true,
  },
  {
    path: '/recover',
    component: SignInUp,
    accessPage: 'Página de recuperação de senha',
    isPublic: true,
  },
  {
    path: routeMap.profile,
    component: RegisterEdit,
    accessPage: 'Página de edição de cadastro',
  },
  {
    path: routeMap.regulation,
    component: Regulation,
    accessPage: 'Página de regulamentos',
  },
];

export default routes;
