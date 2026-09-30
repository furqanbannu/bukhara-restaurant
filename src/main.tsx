import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Bukhara Application Render Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#17130F] text-[#F4EFE6] flex flex-col items-center justify-center p-6 text-center font-serif">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#C6A15B] mb-4">BUKHARA</h1>
          <p className="text-sm sm:text-base text-[#E4C88A] max-w-md mb-6 font-sans font-light">
            We are preparing the table. If this message persists, please refresh your session.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#C6A15B] text-[#17130F] text-xs font-semibold uppercase tracking-[0.2em] font-sans hover:bg-[#E4C88A] transition-colors"
          >
            Refresh Experience
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

