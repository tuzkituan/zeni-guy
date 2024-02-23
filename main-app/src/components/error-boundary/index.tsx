import { Warning } from '@phosphor-icons/react';
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="mp-flex mp-justify-start mp-items-center mp-gap-2">
          <Warning size={20} weight="fill" className="mp-text-red-600" />
          <span className="mp-font-semibold mp-text-sm mp-text-red-600">Something went wrong.</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
