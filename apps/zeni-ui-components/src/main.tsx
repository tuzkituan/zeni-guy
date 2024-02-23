import ReactDOM from 'react-dom/client';
import { ZeniProvider } from 'zeni-ui';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Docs from './views/docs/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/docs',
    element: <Docs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ZeniProvider initialTheme="baseLight">
    <RouterProvider router={router} />
  </ZeniProvider>,
);
