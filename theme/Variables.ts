import { createGlobalStyle } from 'styled-components';

import mediaQueries from './configs/mediaQueries';

const CSSVariables = createGlobalStyle`
        :root {
                --base-font-size: 16px;
                --header-height: 40px;
                --footer-height: 520px;

                --white: #ffffff;
                --black: #000000;

                ${mediaQueries.tablet} {
                        --header-height: 50px;
                        --footer-height: 445px;
                        --bottom-cta-height: 120px;
                }

                ${mediaQueries.laptopS} {
                        --header-height: 60px;
                        --footer-height: 310px;
                }
        }

        body[data-theme="dark"] {
          --grey-cyan: #303133;
          --grey: #EEEFF5;
          --black-brand: #0B1445;
          --blue-dim: #0057B2;
          --grey-lt: #F5F6F9;
          --grey-dark: #BBBFD6;
          --blue-brand: #007FFF;
          --red-warning: #FF003B;
          --success: #15C1A7;

          --dd-bg: #303133;
          --dd-input-text: #EEEFF5;
          --color-bg-toggle: #0B1445;
        }

        /* Works on Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: var(--grey-dark) var(--grey);
        }

        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
          width: 2px;
          height:10px;
        }

        *::-webkit-scrollbar-track {
          background: var(--grey);
        }

        *::-webkit-scrollbar-thumb {
          background-color: var(--grey-dark);
          border-radius: 8px;
          border: 2px solid var(--grey);
        }
`;

export default CSSVariables;
