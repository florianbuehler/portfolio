import { createGlobalStyle } from 'styled-components';
import devices from './devices';
import fonts from './fonts';
import PrismStyles from './PrismStyles';
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
  ${fonts};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: ${({ theme }) => theme.bg.selected};
    color: ${({ theme }) => theme.typography.colors.selected};
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: ${({ theme }) => `2px dashed ${theme.colors.primary}`};
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0;
  }

  /* 
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: ${({ theme }) => `2px dashed ${theme.colors.primary}`};
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => `${theme.colors.darkSlate} ${theme.colors.navy}`};
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg.color};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkSlate};
    border: ${({ theme }) => `3px solid ${theme.bg.color}`};
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.bg.color};
    color: ${({ theme }) => theme.typography.colors.text};
    font-family: ${({ theme }) => theme.typography.fontSans};
    font-size: ${({ theme }) => theme.typography.fontSizes.textLg};
    line-height: 1.3;

    ${devices.mobileL} {
      font-size: ${({ theme }) => theme.typography.fontSizes.textXl};
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${({ theme }) => theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100%;
    padding: 125px 25px;

    ${devices.mobileL} {
      padding: 150px 50px;
    }
    ${devices.tablet} {
      padding: 200px 100px;
    }
    ${devices.laptop} {
      padding: 200px 150px;
    }
    
    &.fillHeight {
      padding: 0 25px;

      ${devices.mobileL} {
        padding: 0 50px;
      }
      ${devices.tablet} {
        padding: 0 100px;
      }
      ${devices.laptop} {
        padding: 0 150px;
      }
    }
  }

  section {
    margin: 0 auto;
    max-width: 1000px;
    padding: 60px 0;

    ${devices.mobileL} {
      padding: 80px 0;
    }
    ${devices.tablet} {
      padding: 100px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${({ theme }) => theme.typography.colors.title};
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: ${({ theme }) => `clamp(26px, 5vw, ${theme.typography.fontSizes.heading})`};
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      margin-right: 5px;
      margin-bottom: -3px;
      counter-increment: section;
      content: '0' counter(section) '.';
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.typography.fontMono};
      font-size: ${({ theme }) =>
        `clamp(${theme.typography.fontSizes.textMd}, 3vw, ${theme.typography.fontSizes.textXl})`};
      font-weight: 400;

      ${devices.mobileL} {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      height: 1px;
      width: 100%;
      background-color: ${({ theme }) => theme.bg.selected};
      margin-left: 10px;

      ${devices.mobileL} {
        margin-left: 20px;
      }
      ${devices.tablet} {
        width: 200px;
      }
      ${devices.laptop} {
        width: 300px;
      }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: ${({ theme }) => theme.bg.highlight};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${({ theme }) => theme.typography.fontSizes.textLg};
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  blockquote {
    border-left-color: ${({ theme }) => theme.colors.primary};
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0;
    margin-right: 0;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: ${({ theme }) => theme.bg.selected};
    height: 1px;
    border-width: 0;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) => theme.typography.fontSizes.textMd};
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.bg.color};
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  #logo {
    color: ${({ theme }) => theme.colors.primary};
  }

  .overline {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) => theme.typography.fontSizes.textMd};
    font-weight: 400;
  }

  .subtitle {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 0 20px 0;
    font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-weight: 400;
    line-height: 1.5;

    ${devices.tablet} {
      font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
    }
    ${devices.laptop} {
      font-size: ${({ theme }) => theme.typography.fontSizes.textMd};
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.primary};

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: ${({ theme }) => theme.typography.fontMono};
      font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${TransitionStyles};

  ${PrismStyles};
`;

export default GlobalStyle;
