import { NavLink, SocialMedia } from './components';

type Config = {
  navLinks: NavLink[];
  socialMedia: SocialMedia[];
  email: string;
};

export const config: Config = {
  navLinks: [
    {
      name: 'About',
      url: '/#about'
    },
    {
      name: 'Experience',
      url: '/#jobs'
    },
    {
      name: 'Work',
      url: '/#projects'
    },
    {
      name: 'Contact',
      url: '/#contact'
    }
  ],

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
  ],

  email: 'florian-buehler@outlook.com'
};
