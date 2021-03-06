
import type { AppProps } from "next/app";
import { GlobalStyle, theme} from '../styles/globals'
import {ThemeProvider} from 'styled-components'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
