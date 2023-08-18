import type { PathRouteProps } from 'react-router-dom';
import { Home } from './route-path';

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
