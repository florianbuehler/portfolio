import { css } from 'styled-components';

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: ${({ theme }) =>
      `opacity 300ms ${theme.transitionEasing}, transform 300ms ${theme.transitionEasing}`};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: ${({ theme }) =>
      `opacity 300ms ${theme.transitionEasing}, transform 300ms ${theme.transitionEasing}`};
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: ${({ theme }) =>
      `opacity 300ms ${theme.transitionEasing}, transform 300ms ${theme.transitionEasing}`};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: ${({ theme }) =>
      `opacity 300ms ${theme.transitionEasing}, transform 300ms ${theme.transitionEasing}`};
  }

  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: ${({ theme }) => `opacity 300ms ${theme.transitionEasing}`};
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: ${({ theme }) => `opacity 300ms ${theme.transitionEasing}`};
  }
`;

export default TransitionStyles;
