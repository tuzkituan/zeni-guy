import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import Portfolio from './portfolio';
import UIComponents from './ui-components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home/*',
    element: <UIComponents />,
  },
  {
    path: '/my',
    element: <Portfolio />,
  },
  { path: '*', element: <MainLayout>404</MainLayout> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
