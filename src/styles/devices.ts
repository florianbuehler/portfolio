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

export const deviceSizes = {
  mobileS: 330,
  mobile: 400,
  mobileL: 480,
  tabletS: 768,
  tablet: 820,
  laptop: 1024,
  laptopL: 1440
};

const devices: Devices = {
  mobileS: mediaQuery(`${deviceSizes.mobileS}px`),
  mobile: mediaQuery(`${deviceSizes.mobile}px`),
  mobileL: mediaQuery(`${deviceSizes.mobileL}px`),
  tabletS: mediaQuery(`${deviceSizes.tabletS}px`),
  tablet: mediaQuery(`${deviceSizes.tablet}px`),
  laptop: mediaQuery(`${deviceSizes.laptop}px`),
  laptopL: mediaQuery(`${deviceSizes.laptopL}px`)
};

export default devices;
