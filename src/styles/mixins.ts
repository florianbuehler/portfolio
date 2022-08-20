import { css } from 'styled-components';

const button = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: var(--border-radius);
  font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
  font-family: ${({ theme }) => theme.typography.fontMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryTint};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.colors.primary};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: ${({ theme }) => theme.colors.primary};
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${({ theme }) => theme.colors.primary} !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,

  smallButton: css`
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
    font-family: ${({ theme }) => theme.typography.fontMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.primaryTint};
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
    font-family: ${({ theme }) => theme.typography.fontMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.primaryTint};
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: ${({ theme }) => `0 10px 30px -15px ${theme.shadow}`};
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => `0 20px 30px -15px ${theme.shadow}`};
    }
  `,

  fancyList: css`
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
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `
};

export default mixins;
