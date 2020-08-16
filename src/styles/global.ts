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
    background: #EFEFEF;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: ${FONTS.regular}, sans-serif;
    font-size: 16px;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  input, button {
    font-size: 1em;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
