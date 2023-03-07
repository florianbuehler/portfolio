import colors from './colors';

type FontSize =
  | 'text2Xs'
  | 'textXs'
  | 'textSm'
  | 'textMd'
  | 'textLg'
  | 'textXl'
  | 'text2Xl'
  | 'heading';

export type Typography = {
  colors: {
    text: string;
    emphasizedText: string;
    title: string;
    subTitle: string;
    highlight: string;
    strongHighlight: string;
    selected: string;
    icon: string;
    iconLight: string;
  };

  fontSans: string;
  fontMono: string;

  fontSizes: {
    [key in FontSize]: string;
  };
};

const typography: Typography = {
  colors: {
    text: colors.slate,
    emphasizedText: colors.lightestSlate,
    title: colors.lightestSlate,
    subTitle: colors.slate,
    highlight: colors.lightSlate,
    strongHighlight: colors.white,
    selected: colors.lightestSlate,
    icon: colors.lightSlate,
    iconLight: colors.lightSlate
  },

  fontSans:
    "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif",
  fontMono: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",

  fontSizes: {
    text2Xs: '12px',
    textXs: '13px',
    textSm: '14px',
    textMd: '16px',
    textLg: '18px',
    textXl: '20px',
    text2Xl: '22px',
    heading: '32px'
  }
};

export default typography;
