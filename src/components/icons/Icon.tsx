import React from 'react';
import { ExternalIcon, FolderIcon, GitHubIcon, LinkedInIcon } from '@components/icons';

export type IconName = 'External' | 'Folder' | 'GitHub' | 'LinkedIn';

type Props = {
  name: IconName;
};

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case 'External':
      return <ExternalIcon />;
    case 'Folder':
      return <FolderIcon />;
    case 'GitHub':
      return <GitHubIcon />;
    case 'LinkedIn':
      return <LinkedInIcon />;
  }
};

export default Icon;
