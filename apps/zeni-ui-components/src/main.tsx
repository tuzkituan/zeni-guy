import ReactDOM from 'react-dom/client';
import { ZeniProvider } from 'zeni-ui';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ZeniProvider initialTheme="baseLight">
    <App />
  </ZeniProvider>,
);
