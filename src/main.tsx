import React, { lazy } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { fetchCharacter, fetchCharacters } from './loaders/CharacterLoader';

import App from './App';
import { CharacterRouteParams } from './types/types';
import { ConfigProvider } from './context/ConfigContext';
import { FeaturevisorProvider } from '@featurevisor/react';
import ReactDOM from 'react-dom/client';
import { createInstance } from '@featurevisor/sdk';

const Characters = lazy(() => import('./pages/Characters'));
const CharacterDetails = lazy(() => import('./pages/CharacterDetails'));

const envName = import.meta.env.VITE_ENV_NAME || 'preview';

const featurevisor = createInstance({
  datafileUrl: `http://d117yeepeezef7.cloudfront.net/datafiles/${envName}/datafile-tag-all.json`,
});

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        loader: fetchCharacters,
        element: <Characters />,
      },
      {
        path: 'character/:id',
        loader: async ({ params }) => {
          return fetchCharacter({ params } as CharacterRouteParams);
        },
        element: <CharacterDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <FeaturevisorProvider instance={featurevisor}>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </FeaturevisorProvider>
  </React.StrictMode>,
);
