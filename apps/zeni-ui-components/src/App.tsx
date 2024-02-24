import { Route, Routes } from 'react-router-dom';
import { ZeniProvider } from 'zeni-ui';
import Docs from './views/docs';
import Home from './views/home';

const App = () => {
  return (
    <ZeniProvider initialTheme="baseLight">
      <Routes>
        <Route key="home" path="/" element={<Home />} />
        <Route key="docs" path="/docs" element={<Docs />} />
        <Route key="404" path="*" element={<span>404 Zeni UI Component routes</span>} />
      </Routes>
    </ZeniProvider>
  );
};

export default App;
