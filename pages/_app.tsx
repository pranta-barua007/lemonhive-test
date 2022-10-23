import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './globalStyle'

// styled componenets setup from this source https://github.com/vercel/next.js/tree/deprecated-main/examples/with-styled-components

function MyApp({ Component, pageProps }: AppProps) {
  return  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
</>
}

export default MyApp
