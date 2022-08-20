import React from 'react';
import styled from 'styled-components';
import { Side } from '../components';
import { Icon, IconName } from '../components/icons';

export type SocialMedia = {
  name: string;
  url: string;
  icon: IconName;
};

type Props = {
  socialMedia: SocialMedia[];
  delayInSec: number;
};

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social: React.FC<Props> = ({ socialMedia, delayInSec }) => (
  <Side delayInSec={delayInSec} position="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ name, url, icon }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="nofollow noopener noreferrer">
              <Icon name={icon} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

export default Social;
