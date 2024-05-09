import { Component, ErrorInfo, ReactNode } from 'react';
import Error_ from '../ui/Error_/Error_';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error('Error boundary caught an error:', error, errorInfo, );
  }

  render() {
    if (this.state.hasError) {
      // You can render any fallback UI here
      return <Error_/>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
