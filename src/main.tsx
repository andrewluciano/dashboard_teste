import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Toaster } from "react-hot-toast";
import { Dashboard } from './pages/Dashboard';

import { QueryClientProvider } from 'react-query';
import { queryClient } from './helpers/queryClient';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <Dashboard />
    </QueryClientProvider>
  </StrictMode>,
)
