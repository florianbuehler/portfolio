import React from 'react';
import {
  ExternalIcon,
  FolderIcon,
  GitHubIcon,
  LinkedInIcon,
  MoonWithStarsIcon,
  SunIcon
} from '@components/icons';
import ChevronLeftIcon from '@components/icons/ChevronLeft';
import ChevronRightIcon from '@components/icons/ChevronRight';

export type IconName =
  | 'chevron-left'
  | 'chevron-right'
  | 'external'
  | 'folder'
  | 'github'
  | 'linkedin'
  | 'moon-with-stars'
  | 'sun';

type Props = {
  name: IconName;
};

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case 'chevron-left':
      return <ChevronLeftIcon />;
    case 'chevron-right':
      return <ChevronRightIcon />;
    case 'external':
      return <ExternalIcon />;
    case 'folder':
      return <FolderIcon />;
    case 'github':
      return <GitHubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'moon-with-stars':
      return <MoonWithStarsIcon />;
    case 'sun':
      return <SunIcon />;
    default:
      throw new Error(`No icon with name ${name}.`);
  }
};

export default Icon;
