import { mediaQuery } from './utils';

type Devices = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
};

export const sizes = {
  mobileS: '330px',
  mobileM: '400px',
  mobileL: '480px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px'
};

const devices: Devices = {
  mobileS: mediaQuery(sizes.mobileS),
  mobileM: mediaQuery(sizes.mobileM),
  mobileL: mediaQuery(sizes.mobileL),
  tablet: mediaQuery(sizes.tablet),
  laptop: mediaQuery(sizes.laptop),
  laptopL: mediaQuery(sizes.laptopL)
};

export default devices;
