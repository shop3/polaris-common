import React from 'react';
import { EmptyState } from '@shopify/polaris';

interface Props {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class EmptyStateErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <EmptyState
          heading="An error occurred"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          action={{ content: 'Go to Shopify Home' }}
          fullWidth
        >
          <p>{this.state.errorMessage}</p>
        </EmptyState>
      );
    }

    return this.props.children;
  }
}

export default EmptyStateErrorBoundary;
