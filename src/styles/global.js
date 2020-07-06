import { createGlobalStyle } from 'styled-components';

const GloblaStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html{
  font-size: 62.5%;
  }

  html, body, #__next{
  height: 100%;
  }

  body{
    display: flex;
    flex-direction: column;

  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  font-family: -apple-system, BlinkMacSystemGont, 'Segoe UI', Roboto, Oxygem, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
export default GloblaStyles;
