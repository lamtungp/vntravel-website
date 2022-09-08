import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect, useState } from 'react';

import { store } from '@/common/redux/store';
import customTheme from '@/styles/theme/createTheme';
import createEmotionCache from '@/utils/createEmotionCache';
import config from '@/utils/config';
import AuthWrapper from '@/layouts/AuthWrapper';
import '@/styles/global.scss';

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={customTheme()}>
          <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
            <AuthWrapper>
              {isMounted && <Component {...pageProps} />}
            </AuthWrapper>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
