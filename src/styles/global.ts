import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #F0F0F5;
    --white: #ffffff;
    --green: #04d361;
    --green-dark: #00b852;
    --blue: #267dff;
    --blue-dark: #116cf5;
    --red: #c53030;
    --text-primary: #3a3a3a;
    --text-primary-light: #3d3d4d;
    --text-secondary: #737180;
    --text-secondary-light: #a8a8b3;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, div#__next {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;

    @media(max-width: 600px) {
      padding: 30px 10px;
    }
  }

  body {
    background: var(--background-color) url('/github-background.svg') no-repeat 70% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
