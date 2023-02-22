import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { usePrefersReducedMotion } from 'hooks';

const StyledNotFound = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontMono};
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage: React.FC = () => {
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

  items.push(<StyledTitle>404</StyledTitle>);
  items.push(<StyledSubtitle>Page Not Found</StyledSubtitle>);
  items.push(<StyledHomeButton href="/">Go Home</StyledHomeButton>);

  return (
    <>
      <Head>
        <title>Page Not Found | Florian Bühler</title>
      </Head>
      <StyledNotFound>
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
                <CSSTransition key={i} timeout={1000} classNames="fadeup">
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </StyledNotFound>
    </>
  );
};

export default NotFoundPage;
