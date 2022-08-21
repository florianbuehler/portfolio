import colors, { Colors } from './colors';
import mixins, { Mixins } from './mixins';
import typography, { Typography } from './typography';

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

  mixins
};

export default theme;
