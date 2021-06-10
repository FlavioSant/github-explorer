import { NextPage } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useCallback, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle, { lightTheme, darkTheme } from '../styles/global';
import AppContainer from '../components/AppContainer';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Head>
        <title>GitHub Explorer</title>
      </Head>
      <AppContainer toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default MyApp;
