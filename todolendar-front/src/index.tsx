import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import router from '@src/router';

import 'core-js';
import 'regenerator-runtime/runtime';
import '@assets/styles/reset.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
