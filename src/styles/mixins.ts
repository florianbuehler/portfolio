import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps
} from 'styled-components';

export type Mixins = {
  flexCenter: FlattenSimpleInterpolation;
  flexBetween: FlattenSimpleInterpolation;
  link: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  inlineLink: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  button: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  smallButton: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  bigButton: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  boxShadow: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  boxShadowCard: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  fancyList: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  resetList: FlattenSimpleInterpolation;
};

const button = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
  font-family: ${({ theme }) => theme.typography.fontMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryTint};
    outline: none;
  }
  &::after {
    display: none !important;
  }
`;

const mixins: Mixins = {
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
    transition: ${({ theme }) => theme.transition};
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
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.colors.primary};
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      outline: 0;
      &::after {
        width: 100%;
      }
      & > * {
        color: ${({ theme }) => theme.colors.primary} !important;
        transition: ${({ theme }) => theme.transition};
      }
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: ${({ theme }) => theme.transition};
      opacity: 0.5;
    }
  `,

  button,

  smallButton: css`
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
    font-family: ${({ theme }) => theme.typography.fontMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.primaryTint};
      outline: none;
    }
    &::after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
    font-family: ${({ theme }) => theme.typography.fontMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.primaryTint};
      outline: none;
    }
    &::after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: ${({ theme }) => `0 10px 30px -15px ${theme.shadow}`};
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => `0 20px 30px -15px ${theme.shadow}`};
    }
  `,

  boxShadowCard: css`
    box-shadow: ${({ theme }) => `0 10px 30px -15px ${theme.card.shadow}`};
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => `0 20px 30px -15px ${theme.card.shadow}`};
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
      &::before {
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
