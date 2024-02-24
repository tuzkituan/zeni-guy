import { Suspense, lazy } from 'react';
import { Spinner } from 'zeni-ui';
import ErrorBoundary from '../../components/error-boundary';
import MainLayout from '../../layouts/main-layout';
const RemoteApp = lazy(() => import('zeni_ui_components/app'));

const UIComponents = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <RemoteApp />
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default UIComponents;
