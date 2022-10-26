import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // this is the shared style

  * {
    box-sizing: border-box;
  }

  html,
    body {
    padding: 0 6rem;
    margin: 0;
    font-family: 'Inter', sans-serif;

    @media screen and (max-width: 800px) {
      padding: 0;
    }
    }

    p {
      color: rgba(10, 20, 47, 0.8);
      opacity: 0.8;
    }

  // anything else you would like to include
`;

export const theme = {
  colors: {
    primary: "#FFC93E",
    secondary: "#725114",
    third: "#111D5E",
  },
};
