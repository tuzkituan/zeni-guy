import React, { Suspense } from 'react';
import CatLoader from './components/3d-loader';
const CatModel = React.lazy(() => import('./components/cat'));
function App() {
  return (
    <div>
      <Suspense fallback={<CatLoader />}>
        <CatModel />
      </Suspense>
    </div>
  );
}

export default App;
