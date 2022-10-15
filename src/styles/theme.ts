import colors, { Colors } from './colors';
import mixins, { Mixins } from './mixins';
import typography, { Typography } from './typography';

export type ThemeName = 'dark' | 'light';

export type Theme = {
  colors: Colors;
  typography: Typography;

  bg: {
    color: string;
    darker: string;
    highlight: string;
    selected: string;
  };

  shadow: string;
  borderRadius: string;
  transition: string;
  transitionEasing: string;

  mixins: Mixins;
};

const theme: Theme = {
  colors,
  typography,

  bg: {
    color: colors.navy,
    darker: colors.darkNavy,
    highlight: colors.lightNavy,
    selected: colors.lightestNavy
  },

  shadow: colors.darkNavyTint,
  borderRadius: '4px',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  transitionEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

  mixins
};

export const getTheme = (themeName: ThemeName) => {
  return theme;
};

export default theme;
