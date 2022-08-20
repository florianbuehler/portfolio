import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import PrismStyles from './PrismStyles';
import TransitionStyles from './TransitionStyles';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

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
    font-size: ${({ theme }) => theme.typography.fontSizes.textXl};;
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.textLg};;
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
        transition: var(--transition);
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
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
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
    color: ${({ theme }) => theme.typography.colors.header};
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
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.typography.fontMono};
      font-size: ${({ theme }) =>
        `clamp(${theme.typography.fontSizes.textMd}, 3vw, ${theme.typography.fontSizes.textXl})`};
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: ${({ theme }) => theme.bg.selected};

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
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
    transition: var(--transition);

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
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${({ theme }) => theme.typography.fontSizes.textLg};;
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
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: ${({ theme }) => theme.bg.selected};
    height: 1px;
    border-width: 0px;
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
    font-size: ${({ theme }) => theme.typography.fontSizes.textMd};
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
    }
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
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
