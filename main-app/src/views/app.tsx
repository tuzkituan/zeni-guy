import { Suspense, lazy } from 'react';
import MainLayout from '../layouts/main-layout';
import { Spinner } from 'zeni-ui';
import ErrorBoundary from '../components/error-boundary';
const ZeniUIHome = lazy(() => import('zeni_ui_components/app'));

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <ZeniUIHome />
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default App;
