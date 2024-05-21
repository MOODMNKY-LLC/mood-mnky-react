import React from 'react';
import { supabase } from './supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import './custom.css'; // Import the custom CSS file

const AuthComponent = () => {
  return (
    <div className="auth-container">
      <div className="auth">
        <img src="/src/assets/moodmnky_logo.png" alt="MOOD MNKY Logo" className="auth-logo" />
        <h1>MOOD MNKY</h1>
        <Auth
          supabaseClient={supabase}
          providers={['discord', 'google', 'notion']}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#ffffff', // White for the brand color
                  brandAccent: '#ffffff',
                  defaultButtonBackground: '#333',
                  defaultButtonBackgroundHover: '#444',
                  defaultButtonBorder: '#444',
                  defaultButtonText: '#fff',
                  inputBorder: '#444',
                  inputBackground: '#222',
                  inputPlaceholder: '#666',
                  inputText: '#fff',
                  messageText: '#fff',
                  text: '#fff',
                  anchorTextColor: '#ffffff',
                },
                fontSizes: {
                  baseBodySize: '16px',
                  baseInputSize: '16px',
                  baseLabelSize: '14px',
                  baseButtonSize: '16px',
                  baseAnchorSize: '14px',
                },
                fonts: {
                  bodyFontFamily: 'var(--custom-font-family)',
                  headingFontFamily: 'var(--custom-font-family)',
                  inputFontFamily: 'var(--custom-font-family)',
                  buttonFontFamily: 'var(--custom-font-family)',
                  anchorFontFamily: 'var(--custom-font-family)',
                },
                borders: {
                  borderRadius: '10px',
                },
              },
            },
          }}
          socialLayout="horizontal"
        />
      </div>
    </div>
  );
};

export default AuthComponent;
