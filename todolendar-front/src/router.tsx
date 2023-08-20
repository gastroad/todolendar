import { createBrowserRouter, Navigate } from 'react-router-dom';

import AuthLayoutTemplate from '@templates/AuthLayoutTemplate';

import DashboardPage from '@pages/DashboardPage';
import PlannerPage from '@src/pages/PlannerPage';
import LoginPage from '@pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <AuthLayoutTemplate />,
    children: [
      {
        path: 'dashbaord',
        element: <DashboardPage />,
      },
      {
        path: 'planner',
        element: <PlannerPage />,
      },
      {
        path: '*',
        element: <Navigate to="/dashbaord" replace />,
      },
    ],
  },
]);
export default router;
