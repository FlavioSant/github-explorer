import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    background: #F0F0F5 url('/github-background.svg') no-repeat 70% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
