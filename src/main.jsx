import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './custom.css'; // Import the custom CSS file
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from './supabaseClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth.UserContextProvider supabaseClient={supabase}>
      <App />
    </Auth.UserContextProvider>
  </React.StrictMode>,
);
