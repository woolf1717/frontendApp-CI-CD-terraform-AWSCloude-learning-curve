import React from 'react';

export const TechnicalComponent = () => {
  const appVersion = __APP_VERSION__ || 'unknown';
  const environment = import.meta.env.VITE_ENVIRONMENT
    ? import.meta.env.VITE_ENVIRONMENT
    : 'local-development';

  return (
    import.meta.env.VITE_ENVIRONMENT !== 'production' && (
      <div className="fixed right-0 mr-8 mb-4 bottom-0 w-48 border-2 border-gray-500 bg-slate-300 rounded-md p-4">
        <p>App version: {appVersion}</p>
        <p>Environment: {environment}</p>
      </div>
    )
  );
};
