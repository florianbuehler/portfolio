import React from 'react';
import { default as GitHubIcon } from './GitHub';
import { default as LinkedInIcon } from './LinkedIn';

export type IconName = 'GitHub' | 'LinkedIn';

type Props = {
  name: IconName;
};

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <GitHubIcon />;
    case 'LinkedIn':
      return <LinkedInIcon />;
  }
};

export default Icon;
