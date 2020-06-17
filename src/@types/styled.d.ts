import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    menu: {
      activeBackgroundColor: string;
      inactiveBackgroundColor: string;
    };
    font: {
      color: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
    };
    regulation: {
      primary: {
        backgroundColor: string;
        scrollBarColor: string;
        scrollBarBackgroundColor: string;
        fontColor: string;
        borderColor: string;
        openIconColor: string;
        closeIconColor: string;
        backgroundOpenIconColor: string;
        backgroundCloseIconColor: string;
      };
      secondary: {
        backgroundColor: string;
        scrollBarColor: string;
        scrollBarBackgroundColor: string;
        fontColor: string;
        borderColor: string;
        openIconColor: string;
        closeIconColor: string;
        backgroundOpenIconColor: string;
        backgroundCloseIconColor: string;
      };
    };
    contact: {
      ballon: {
        backgroundColor: string;
      };
    };
    modal: {
      primary: {
        backgroundColor: string;
        scrollBarColor: string;
        scrollBarBackgroundColor: string;
      };
      secondary: {
        backgroundColor: string;
        scrollBarColor: string;
        scrollBarBackgroundColor: string;
      };
    };
    input: {
      primary: {
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
        labelFontColor: string;
        borderRadius: string;
        borderWidth: string;
        errorBorderWidth: string;
        focusedBorderWidth: string;
        filledBorderWidth: string;
        scrollBarBackgroundColor: string;
        scrollBarColor: string;
      };
      secondary: {
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
        labelFontColor: string;
        borderRadius: string;
        borderWidth: string;
        errorBorderWidth: string;
        focusedBorderWidth: string;
        filledBorderWidth: string;
        scrollBarBackgroundColor: string;
        scrollBarColor: string;
      };
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
        borderRadius: string;
      };
      secondary: {
        backgroundColor: string;
        fontColor: string;
        borderRadius: string;
      };
      tertiary: {
        backgroundColor: string;
        fontColor: string;
        borderRadius: string;
      };
    };
    link: {
      fontColor: string;
    };
  }
}
