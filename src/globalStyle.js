import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
/* html{
  background: red;
} */
  body {
    background: ${(props) =>
      props.background ? props.background : ({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
  `;
