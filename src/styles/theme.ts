import colors, { Colors } from './colors';
import { typography, Typography } from './fonts';
import mixins from './mixins';

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

  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`
  },

  mixins
};

export default theme;
