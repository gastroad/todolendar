import { createBrowserRouter } from 'react-router-dom';

import LayoutTemplate from '@templates/LayoutTemplate';

import DashboardPage from '@pages/DashboardPage';
import TodoLendarPage from '@pages/TodolendarPage';
import LoginPage from '@pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutTemplate />,
    children: [
      {
        path: 'dashbaord',
        element: <DashboardPage />,
      },
      {
        path: 'todolendar',
        element: <TodoLendarPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
export default router;
