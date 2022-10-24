import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles/globalStyle";

// styled componenets setup from this source https://github.com/vercel/next.js/tree/deprecated-main/examples/with-styled-components

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
