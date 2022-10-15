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
    title: string;
    highlight: string;
    strongHighlight: string;
    selected: string;
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
    title: colors.lightestSlate,
    highlight: colors.lightSlate,
    strongHighlight: colors.white,
    selected: colors.lightestSlate
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
