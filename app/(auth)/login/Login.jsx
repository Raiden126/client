"use client";
import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './brandingTheme';

const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
  { id: 'credentials', name: 'Email and Password' },
];

const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function ThemeSignInPage() {
  const calculatedMode = 'light'; // Default to light mode or manage state manually
  const brandingDesignTokens = getDesignTokens(calculatedMode);

  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode,
    },
  });

  return (
    <AppProvider theme={THEME}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
  );
}
