import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '../../hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) =>
      `clamp(${theme.typography.fontSizes.textSm}, 5vw, ${theme.typography.fontSizes.textMd})`};
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.typography.colors.text};
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .action-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const HeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const items = [];

  items.push(<h1>Hi, my name is</h1>);
  items.push(<h2 className="big-heading">Florian Bühler.</h2>);
  items.push(<h3 className="big-heading">I build things for the web.</h3>);
  items.push(
    <p>
      I’m a software engineer specializing in building (and occasionally designing) exceptional
      digital experiences. Currently, I’m focused on building accessible, human-centered products at{' '}
      <a href="https://google.com/" target="_blank" rel="nofollow noopener noreferrer">
        Company
      </a>
      .
    </p>
  );
  items.push(
    <a
      className="action-link"
      href="https://google.com"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      Check out my resume!
    </a>
  );

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default HeroSection;
