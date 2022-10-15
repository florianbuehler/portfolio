import { NavLink, SocialMedia } from '@components';

type Config = {
  navLinks: NavLink[];
  socialMedia: SocialMedia[];
  email: string;
  projectUrl: string;
};

const config: Config = {
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
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/florian-b%C3%BChler/',
      icon: 'linkedin'
    }
  ],

  email: 'florian-buehler@outlook.com',
  projectUrl: 'https://github.com/florianbuehler/portfolio'
};

export default config;
