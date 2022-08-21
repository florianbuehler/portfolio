import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
// import { Menu } from '../components';
import { useScrollDirection, usePrefersReducedMotion } from '../../hooks';
import { devices } from '../../styles';
import { Menu, ReducedMotionMenu } from './Menu';
import { NavLink } from './types';

type Props = {
  navLinks: NavLink[];
  delayInSec?: number;
};

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 100px;
  padding: 0 25px;
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  ${devices.tablet} {
    padding: 0 40px;
  }
  ${devices.laptop} {
    padding: 0 50px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: ${({ theme }) => `0 10px 30px -10px ${theme.shadow}`};
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: 70px;
        transform: translateY(calc(70px * -1));
        box-shadow: ${({ theme }) => `0 10px 30px -10px ${theme.shadow}`};
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};

  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-family: ${({ theme }) => theme.typography.fontMono};
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: ${({ theme }) => theme.colors.primary};
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: ${({ theme }) => theme.colors.primaryTint};
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const Header: React.FC<Props> = ({ navLinks, delayInSec }) => {
  const delay = !!delayInSec;

  const [isMounted, setIsMounted] = useState(!delay);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeClass = delay ? 'fade' : '';

  const Logo = (
    <div className="logo" tabIndex={-1}>
      <Link to="/" aria-label="home">
        <h2>F</h2>
      </Link>
    </div>
  );

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}

            <ReducedMotionMenu navLinks={navLinks} />
            {/*<Menu />*/}
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={delayInSec || 0}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup>

            <Menu navLinks={navLinks} isMounted={isMounted} delayInSec={delayInSec} />
            {/*<TransitionGroup component={null}>*/}
            {/*  {isMounted && (*/}
            {/*    <CSSTransition classNames={fadeClass} timeout={delayInSec}>*/}
            {/*      <Menu />*/}
            {/*    </CSSTransition>*/}
            {/*  )}*/}
            {/*</TransitionGroup>*/}
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
