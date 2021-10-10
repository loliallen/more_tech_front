import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-feature-settings: "tnum" on, "lnum" on;
    background: #0a2973;
  }
`;
 
export default GlobalStyle;