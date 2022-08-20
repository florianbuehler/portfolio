import { SocialMedia } from './components';

type Config = {
  email: string;
  socialMedia: SocialMedia[];
};

export const config: Config = {
  email: 'florian-buehler@outlook.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/florianbuehler',
      icon: 'GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/florian-b%C3%BChler/',
      icon: 'LinkedIn'
    }
  ]
};
