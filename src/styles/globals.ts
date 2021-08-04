import { createGlobalStyle } from "styled-components";
import { AluraStyles } from "./styles";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #D9E6F6;
    font-family: Poppins;
  }
#__next{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}

${AluraStyles}

`;

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};
