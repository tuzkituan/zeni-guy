import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ZeniProvider } from 'zeni-ui';
import './index.css';
import Portfolio from './views/portfolio/index.tsx';
import App from './views/app.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/my',
    element: <Portfolio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ZeniProvider initialTheme="baseLight">
    <RouterProvider router={router} />
  </ZeniProvider>,
);
