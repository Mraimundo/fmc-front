import { css } from 'styled-components';

export default css`
  @font-face {
    font-family: 'Helvetica-Neue-Condensed';
    src: url('/fonts/Helvetica-Neue-57-Condensed.eot');
    src: local('HelveticaNeue Condensed'), local('HelveticaNeueCondensed'),
      url('/fonts/Helvetica-Neue-57-Condensed.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/Helvetica-Neue-57-Condensed.woff2') format('woff2'),
      url('/fonts/Helvetica-Neue-57-Condensed.woff') format('woff'),
      url('/fonts/Helvetica-Neue-57-Condensed.ttf') format('truetype'),
      url('/fonts/Helvetica-Neue-57-Condensed.svg#Helvetica Neue') format('svg');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Bold';
    src: url('/fonts/hinted-HelveticaNeueBold.eot');
    src: local('HelveticaNeue Bold'), local('HelveticaNeueBold'),
      url('/fonts/hinted-HelveticaNeueBold.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeueBold.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeueBold.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeueBold.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeueBold.svg#HelveticaNeueBold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Regular';
    src: url('/fonts/hinted-HelveticaNeueLight.eot');
    src: local('HelveticaNeue Light'), local('HelveticaNeueLight'),
      url('/fonts/hinted-HelveticaNeueLight.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeueLight.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeueLight.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeueLight.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeueLight.svg#HelveticaNeueLight')
        format('svg');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Medium';
    src: url('/fonts/hinted-HelveticaNeueMedium.eot');
    src: local('HelveticaNeue Medium'), local('HelveticaNeueMedium'),
      url('/fonts/hinted-HelveticaNeueMedium.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeueMedium.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeueMedium.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeueMedium.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeueMedium.svg#HelveticaNeueMedium')
        format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Light';
    src: url('/fonts/hinted-HelveticaNeueRegular.eot');
    src: local('HelveticaNeue Regular'), local('HelveticaNeueRegular'),
      url('/fonts/hinted-HelveticaNeueRegular.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeueRegular.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeueRegular.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeueRegular.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeueRegular.svg#HelveticaNeueRegular')
        format('svg');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Italic';
    src: url('/fonts/hinted-HelveticaNeueItalic.eot');
    src: local('HelveticaNeue Italic'), local('HelveticaNeueItalic'),
      url('/fonts/hinted-HelveticaNeueItalic.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeueItalic.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeueItalic.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeueItalic.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeueItalic.svg#HelveticaNeueItalic')
        format('svg');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Medium-Ext';
    src: url('/fonts/hinted-HelveticaNeue-MediumExt.eot');
    src: local('Helvetica 63 Medium Extended'), local('HelveticaNeue-MediumExt'),
      url('/fonts/hinted-HelveticaNeue-MediumExt.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeue-MediumExt.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeue-MediumExt.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeue-MediumExt.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeue-MediumExt.svg#HelveticaNeue-MediumExt')
        format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Bold-Ext';
    src: url('/fonts/hinted-HelveticaNeue-BoldExt.eot');
    src: local('Helvetica 73 Bold Extended'), local('HelveticaNeue-BoldExt'),
      url('/fonts/hinted-HelveticaNeue-BoldExt.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeue-BoldExt.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeue-BoldExt.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeue-BoldExt.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeue-BoldExt.svg#HelveticaNeue-BoldExt')
        format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica-Neue-Regular-Ext';
    src: url('/fonts/hinted-HelveticaNeue-Extended.eot');
    src: local('Helvetica 53 Extended'), local('HelveticaNeue-Extended'),
      url('/fonts/hinted-HelveticaNeue-Extended.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/hinted-HelveticaNeue-Extended.woff2') format('woff2'),
      url('/fonts/hinted-HelveticaNeue-Extended.woff') format('woff'),
      url('/fonts/hinted-HelveticaNeue-Extended.ttf') format('truetype'),
      url('/fonts/hinted-HelveticaNeue-Extended.svg#HelveticaNeue-Extended')
        format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;
