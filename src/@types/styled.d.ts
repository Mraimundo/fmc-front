import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    input: {
      borderColor: string;
      backgroundColor: string;
      fontColor: string;
      iconColor: string;
      focusedBorderColor: string;
      filledBorderColor: string;
      errorBorderColor: string;
      errorIconColor: string;
      filledIconColor: string;
      placeholderColor: string;
    };
    tooltip: {
      error: {
        borderColor: string;
        backgroundColor: string;
        fontColor: string;
      };
      success: {
        borderColor: string;
        backgroundColor: string;
        fontColor: string;
      };
      info: {
        borderColor: string;
        backgroundColor: string;
        fontColor: string;
      };
    };
    button: {
      primary: {
        backgroundColor: string;
        fontColor: string;
      };
      secondary: {
        backgroundColor: string;
        fontColor: string;
      };
    };
  }
}
