import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { Toaster } from 'react-hot-toast';

import './index.css';
import App from './App.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          className: "text-lg font-medium px-6 py-4 rounded-lg shadow-lg",
          style: {
            background: "#1f2937", // Tailwind gray-800
            color: "#f9fafb",       // Tailwind gray-50
          },
        }}
      />
    </ClerkProvider>
  </StrictMode>
);
