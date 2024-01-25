import { Suspense, lazy } from 'react';
import ErrorBoundary from '../../components/error-boundary';
import MainLayout from '../../layouts/main-layout';
const MyPortfolio = lazy(() => import('portfolio/portfolio'));

const Portfolio = () => {
  return (
    <MainLayout>
      <Suspense fallback={null}>
        <ErrorBoundary>
          <MyPortfolio />
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
};

export default Portfolio;
