import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    colors: {
      backgroundColor: string;
      white: string;
      green: string;
      greenDark: string;
      blue: string;
      blueDark: string;
      red: string;
      textPrimary: string;
      textPrimaryLight: string;
      textSecondary: string;
      textSecondaryLight: string;
    };
  }
}
