import { createGlobalStyle } from 'styled-components';

import colors from '@theme/configs/colors';

import mediaQueries from './configs/mediaQueries';

const GlobalStyle = createGlobalStyle`
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

        body[data-theme="light"] {
          --grey-cyan: ${colors.greyCyan};
          --grey: ${colors.grey};
          --black-brand: ${colors.blackBrand};
          --blue-dim: ${colors.blueDim};
          --grey-lt: ${colors.greyLt};
          --grey-dark: ${colors.greyDark};
          --blue-brand: ${colors.blueBrand};
          --red-warning: ${colors.redWarning};
          --success: ${colors.success};
          --yellow: ${colors.yellow};

          --dd-bg: ${colors.ddBg};
          --dd-input-text: ${colors.ddInputText};
          --color-bg-toggle: ${colors.colorBgToggle};
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
          
          &:focus-visible {
            outline: none;
          }
        }

        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
          width: 10px;
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
        
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: var(--base-font-size);
    font-family: Manrope, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    
  }

  body.no-scroll {
    overflow-y: hidden;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg {
    fill: currentColor;
  }

  textarea, select, input {
    outline: unset;
    border: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 8px;

    &:disabled {
      opacity: 32%;
    }
  }

  a {
    text-decoration: none;

    svg {
      vertical-align: middle;
    }
  }

  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border:inherit;
    -webkit-text-fill-color: unset;
    -webkit-box-shadow: inherit;
    transition: background-color 5000s ease-in-out 0s;
  }

  html,
  body {
    height: 100%;
  }
  
  .MuiPaper-root {
      pointer-events: all;
  }
  
  .MuiDrawer-paper {
      z-index: 2;
      overflow: visible!important;
  }
`;

export default GlobalStyle;
