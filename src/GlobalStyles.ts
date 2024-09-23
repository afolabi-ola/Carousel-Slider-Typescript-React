import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Add your global styles here */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f8f8;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
