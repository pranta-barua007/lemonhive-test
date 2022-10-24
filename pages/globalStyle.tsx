import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // this is the shared style

  * {
    box-sizing: inherit;
  }

  html,
    body {
    padding: 0 60px;
    margin: 0;
    font-family: 'Inter', sans-serif;
    }

    h1 {
        color: yellow !important; // the important is just to show that the style works!
    }

  // anything else you would like to include
`;

export const theme = {
    colors: {
      primary: '#FFC93E',
      secondary: '#725114',
      third: '#111D5E'
    },
  }