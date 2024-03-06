import React, { Suspense } from 'react';
import CatLoader from './components/3d-loader';
import { Box } from 'zeni-ui';
const CatModel = React.lazy(() => import('./components/cat'));
function App() {
  return (
    <Box>
      <Box className="pp-mb-4" />
      <Suspense fallback={<CatLoader />}>
        <CatModel />
      </Suspense>
    </Box>
  );
}

export default App;
