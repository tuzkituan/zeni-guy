import { Suspense, lazy } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
const UIComponentApp = lazy(() => import("zeni_ui_components/all"));

function App() {
  return (
    <>
      <h1>ZENI GUY</h1>
      <br />

      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <UIComponentApp />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
