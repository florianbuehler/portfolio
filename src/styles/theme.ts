import colors, { Colors } from './colors';
import mixins, { Mixins } from './mixins';
import typography, { Typography } from './typography';

export type ThemeName = 'dark' | 'light';

export type Theme = {
  colors: Colors;
  typography: Typography;

  bg: {
    header: string;
    base: string;
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

const darkTheme: Theme = {
  colors,
  typography,

  bg: {
    base: '#0f172a',
    header: 'rgba(15, 23, 42, 0.85)',
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

const lightTheme: Theme = {
  colors: {
    ...colors,
    primary: '#0DBA92FF'
  },

  typography: {
    ...typography,
    colors: {
      text: '#334155',
      title: '#64748b',
      highlight: '#94a3b8',
      strongHighlight: '#0f172a',
      selected: colors.lightestSlate
    }
  },

  bg: {
    base: '#f8fafc',
    header: 'rgba(248, 250, 252, 0.85)',
    darker: '#e2e8f0',
    highlight: '#f8fafc',
    selected: colors.lightestNavy
  },

  shadow: colors.darkNavyTint,
  borderRadius: '4px',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  transitionEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

  mixins
};

const getTheme = (themeName: ThemeName) => {
  switch (themeName) {
    case 'light':
      return lightTheme;
    case 'dark':
    default:
      return darkTheme;
  }
};

export default getTheme;
