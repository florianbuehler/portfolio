import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { SocialMedia } from 'components';
import { Icon } from 'components/icons';
import { usePrefersReducedMotion } from 'hooks';
import { devices } from 'styles';

type Props = {
  socialMedia: SocialMedia[];
  projectUrl: string;
  delayInSec?: number;
};

type StyledCreditProps = {
  tabindex: number | undefined;
};

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto 10px;
  color: ${({ theme }) => theme.typography.colors.highlight};

  ${devices.tablet} {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      margin: 0 5px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div<StyledCreditProps>`
  color: ${({ theme }) => theme.typography.colors.highlight};
  font-family: ${({ theme }) => theme.typography.fontMono};
  font-size: ${({ theme }) => theme.typography.fontSizes.text2Xs};
  line-height: 1;

  a {
    padding: 10px;
  }
`;

const Footer: React.FC<Props> = ({ socialMedia, projectUrl, delayInSec }) => {
  const delay = !!delayInSec;

  const [isMounted, setIsMounted] = useState<boolean>(!delay);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!delay || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), delayInSec);
    return () => clearTimeout(timeout);
  }, [delay, delayInSec, prefersReducedMotion]);

  const content = (
    <>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url, icon }, i) => (
              <li key={i}>
                <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                  <Icon name={icon} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex={-1}>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <div>Built by Florian Bühler</div>
        </a>
      </StyledCredit>
    </>
  );

  return (
    <StyledFooter>
      {prefersReducedMotion ? (
        <>{content}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={delayInSec ? 'fade' : ''} timeout={delayInSec || 0}>
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledFooter>
  );
};

export default Footer;
