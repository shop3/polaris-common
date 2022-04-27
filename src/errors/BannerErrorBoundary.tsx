import React from 'react';
import { Banner } from '@shopify/polaris';

interface Props {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class BannerErrorBoundary extends React.Component<Props, State> {
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
        <Banner title="An error occurred" status="critical">
          <p>{this.state.errorMessage}</p>
        </Banner>
      );
    }

    return this.props.children;
  }
}

export default BannerErrorBoundary;
