type Color =
  | 'primary'
  | 'primaryTint'
  | 'white'
  | 'lightestSlate'
  | 'lightSlate'
  | 'slate'
  | 'darkSlate'
  | 'lightestNavy'
  | 'lightNavy'
  | 'navy'
  | 'darkNavy'
  | 'darkNavyTint';

export type Colors = {
  [key in Color]: string;
};

const colors: Colors = {
  primary: '#64ffda',
  primaryTint: 'rgba(100, 255, 218, 0.1)',
  white: '#e6f1ff',
  lightestSlate: '#ccd6f6',
  lightSlate: '#a8b2d1',
  slate: '#8892b0',
  darkSlate: '#495670',
  lightestNavy: '#233554',
  lightNavy: '#112240',
  navy: '#0a192f',
  darkNavy: '#020c1b',
  darkNavyTint: 'rgba(2, 12, 27, 0.7)'
};

export default colors;
