import { createGlobalStyle } from 'styled-components';
import Montserrat500woff from './Montserrat-Medium.woff';
import Montserrat500woff2 from './Montserrat-Medium.woff2';
import Montserrat400woff from './Montserrat-Regular.woff';
import Montserrat400woff2 from './Montserrat-Regular.woff2';
import Montserrat700woff from './Montserrat-Bold.woff';
import Montserrat700woff2 from './Montserrat-Bold.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
      src: local('Montserrat'), local('Montserrat'),
      url(${Montserrat500woff2}) format('woff2'),
      url(${Montserrat500woff}) format('woff');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
      src: local('Montserrat'), local('Montserrat'),
      url(${Montserrat400woff2}) format('woff2'),
      url(${Montserrat400woff}) format('woff');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
      src: local('Montserrat'), local('Montserrat'),
      url(${Montserrat700woff2}) format('woff2'),
      url(${Montserrat700woff}) format('woff');
      font-weight: 700;
      font-style: normal;
  }
`;
