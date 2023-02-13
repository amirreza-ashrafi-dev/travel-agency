import { createTheme } from '@mui/material';
import monteserrat from '../fonts/montserrat/Montserrat-Medium.ttf';
import monteserrat2 from '../fonts/montserrat/Montserrat-Regular.ttf';
import tradegothic from '../fonts/tradegothic/Trade Gothic LT Bold.ttf';
import tradegothic2 from '../fonts/tradegothic/Trade Gothic LT.ttf';
import type { Theme } from '@mui/material';

const ThemeConfing: Theme = createTheme({
    typography: {
        fontFamily: 'montserrat, tradegothic',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'montserrat';
              font-style: medium;
              src: local('Raleway'), local('Raleway-Regular'), url(${monteserrat}) format('woff2');
            };
            @font-face {
                font-family: 'montserrat2';
                font-style: regular;
                src: local('Raleway'), local('Raleway-Regular'), url(${monteserrat2}) format('woff2');
            };
            @font-face {
                font-family: 'tradegothic';
                font-style: regular;
                src: local('Raleway'), local('Raleway-Regular'), url(${tradegothic}) format('woff2');
            };
            @font-face {
                font-family: 'tradegothic2';
                font-style: regular;
                src: local('Raleway'), local('Raleway-Regular'), url(${tradegothic2}) format('woff2');
            }
          `
        }
    }
})


export default ThemeConfing;