import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { usePrefersReducedMotion } from 'hooks';
import { devices } from 'styles';

type Props = {
  children?: React.ReactNode;
  delayInSec?: number;
  position: 'left' | 'right';
};

type StyledProps = Pick<Props, 'position'>;

const StyledSide = styled.div<StyledProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  color: ${({ theme }) => theme.typography.colors.highlight};
  display: none;

  ${devices.tablet} {
    display: block;

    left: ${({ position }) => (position === 'left' ? '20px' : 'auto')};
    right: ${({ position }) => (position === 'left' ? 'auto' : '20px')};
  }

  ${devices.laptop} {
    left: ${({ position }) => (position === 'left' ? '40px' : 'auto')};
    right: ${({ position }) => (position === 'left' ? 'auto' : '40px')};
  }
`;

const Side: React.FC<Props> = ({ children, delayInSec, position }) => {
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

  return (
    <StyledSide position={position}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={delayInSec ? 'fade' : ''} timeout={delayInSec || 0}>
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </StyledSide>
  );
};

export default Side;
