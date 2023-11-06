import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    subTextColor: string;
    modalTextColor: string;
    bgColor: string;
    accentColor: string;
    boxShadowColor: string;
    boxHoverColor: string;
    tabBgColor: string;
    errorColor: string;
    inputBorderColor: string;
    inputBorderFocusColor: string;
    modalHeaderBar: string;
  }
}
