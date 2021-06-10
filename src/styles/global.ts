import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  type: 'LIGHT',
  colors: {
    backgroundColor: '#F0F0F5',
    white: '#ffffff',
    green: '#04d361',
    greenDark: '#00b852',
    blue: '#267dff',
    blueDark: '#116cf5',
    red: '#c53030',
    textPrimary: '#3a3a3a',
    textPrimaryLight: '#3d3d4d',
    textSecondary: '#737180',
    textSecondaryLight: '#9d9da8',
  },
};

export const darkTheme = {
  type: 'DARK',
  colors: {
    backgroundColor: '#4c4c52',
    white: '#3a3a3a',
    green: '#04d361',
    greenDark: '#00b852',
    blue: '#267dff',
    blueDark: '#116cf5',
    red: '#c53030',
    textPrimary: '#dfdfe6',
    textPrimaryLight: '#F0F0F5',
    textSecondary: '#9d9ba8',
    textSecondaryLight: '#cccbd4',
  },
};

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
    background: ${({ theme }) =>
      theme.colors
        .backgroundColor} url('/github-background.svg') no-repeat 70% top;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
