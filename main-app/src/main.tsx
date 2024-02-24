import ReactDOM from 'react-dom/client';
import { ZeniProvider } from 'zeni-ui';
import './index.css';
import App from './views/app.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ZeniProvider initialTheme="baseLight">
    <App />
  </ZeniProvider>,
);
