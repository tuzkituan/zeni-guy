import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { Spinner } from "zeni-ui";
import MainLayout from "./layouts/main-layout";
const UIComponentApp = lazy(() => import("zeni_ui_components/app"));

function App() {
  return (
    <MainLayout>
      <h1>ZENI GUY</h1>
      <br />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <UIComponentApp />
        </ErrorBoundary>
      </Suspense>
    </MainLayout>
  );
}

export default App;
