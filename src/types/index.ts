import React from 'react';

// Component Props Interfaces
export interface Plan {
  name: string;
  price: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Coach {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

// Error Boundary Component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong</h2>
            <p className="text-slate-600 mb-4">Please try refreshing the page</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Loading Component
export const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

// Analytics Utilities
export const trackEvent = (eventName: string, properties: object) => {
  // Implement your analytics tracking here
  console.log('Event tracked:', eventName, properties);
};

export const trackConversion = (conversionType: string) => {
  // Implement your conversion tracking here
  console.log('Conversion tracked:', conversionType);
};

// Security Utilities
export const getCsrfToken = () => {
  // Implement your CSRF token retrieval here
  return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
};

export const sanitizeInput = (input: string): string => {
  // Implement your input sanitization here
  return input.replace(/[<>]/g, '');
}; 