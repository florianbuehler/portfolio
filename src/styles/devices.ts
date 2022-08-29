import { mediaQuery } from './utils';

type Devices = {
  mobileS: string;
  mobile: string;
  mobileL: string;
  tabletS: string;
  tablet: string;
  laptop: string;
  laptopL: string;
};

export const sizes = {
  mobileS: '330px',
  mobile: '400px',
  mobileL: '480px',
  tabletS: '768px',
  tablet: '820px',
  laptop: '1024px',
  laptopL: '1440px'
};

const devices: Devices = {
  mobileS: mediaQuery(sizes.mobileS),
  mobile: mediaQuery(sizes.mobile),
  mobileL: mediaQuery(sizes.mobileL),
  tabletS: mediaQuery(sizes.tabletS),
  tablet: mediaQuery(sizes.tablet),
  laptop: mediaQuery(sizes.laptop),
  laptopL: mediaQuery(sizes.laptopL)
};

export default devices;
