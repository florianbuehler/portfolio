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

  card: {
    title: string;
    text: string;
    highlight: string;
    info: string;
    icon: string;
    background: string;
    shadow: string;
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

  card: {
    title: colors.lightestSlate,
    text: colors.lightestSlate,
    highlight: colors.white,
    info: colors.slate,
    icon: colors.lightSlate,
    background: colors.lightNavy,
    shadow: colors.darkNavyTint
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
    primary: '#0DBA92',
    primaryTint: 'rgba(13, 186, 146, 0.1)'
  },

  typography: {
    ...typography,
    colors: {
      text: '#475569',
      emphasizedText: '#475569',
      title: '#334155',
      subTitle: '#64748b',
      highlight: '#64748b',
      strongHighlight: '#0f172a',
      selected: '#475569',
      icon: '#64748b',
      iconLight: '#94a3b8'
    }
  },

  bg: {
    base: '#f8fafc',
    header: 'rgba(248, 250, 252, 0.85)',
    darker: '#e2e8f0',
    highlight: '#f1f5f9',
    selected: '#e2e8f0'
  },

  card: {
    title: colors.lightestSlate,
    text: colors.lightestSlate,
    highlight: colors.white,
    info: colors.slate,
    icon: '#94a3b8',
    background: colors.lightNavy,
    shadow: colors.darkNavyTint
  },

  shadow: 'rgba(203, 213, 225)',
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
