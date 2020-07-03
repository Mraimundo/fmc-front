import { createGlobalStyle } from 'styled-components';
import fontFaces from './font/font-faces';
import { FONTS } from './font/globals';
import 'react-image-lightbox/style.css';

export default createGlobalStyle`
  ${fontFaces}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: ${FONTS.regular}, sans-serif;
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
