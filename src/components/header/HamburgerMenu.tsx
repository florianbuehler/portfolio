import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggle from '@components/header/ThemeToggle';
import { useOnClickOutside } from '@hooks';
import { devices, deviceSizes, ThemeName } from '@styles';
import { KEY_CODES } from '@utils';
import { NavLink } from './types';

type Props = {
  navLinks: NavLink[];
  themeName: ThemeName;
  onThemeToggle: (themeName: ThemeName) => void;
};

type StyledProps = {
  menuOpen: boolean;
};

const StyledMenu = styled.div`
  display: block;

  ${devices.tablet} {
    display: none;
  }
`;

const StyledHamburgerMenu = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  align-items: center;
  margin-right: -15px;
`;

const StyledHamburgerThemeToggle = styled(ThemeToggle)<StyledProps>`
  transform: translateX(${({ menuOpen }) => (menuOpen ? 0 : 100)}vw);
  visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
  transition: ${({ theme }) => theme.transition};

  margin-left: 0;
  padding: 13px;
  width: fit-content;

  svg {
    height: 28px;
  }

  &.dark {
    margin-bottom: 0;
  }
`;

const StyledHamburgerButton = styled.button<StyledProps>`
  ${({ theme }) => theme.mixins.flexCenter};

  padding: 15px;
  border: 0;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;

  ${devices.tablet} {
    display: none;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props) => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &::before {
      width: ${({ menuOpen }) => (menuOpen ? `100%` : `120%`)};
      top: ${({ menuOpen }) => (menuOpen ? `0` : `-10px`)};
      opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen
          ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
          : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
    }

    &::after {
      width: ${({ menuOpen }) => (menuOpen ? `100%` : `80%`)};
      bottom: ${({ menuOpen }) => (menuOpen ? `0` : `-10px`)};
      transform: rotate(${({ menuOpen }) => (menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) =>
        menuOpen
          ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
          : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
    }
  }
`;

const StyledSidebar = styled.aside<StyledProps>`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0;
  background-color: ${({ theme }) => theme.bg.highlight};
  box-shadow: ${({ theme }) => `-10px 0px 30px -15px ${theme.shadow}`};
  z-index: 9;
  transform: translateX(${({ menuOpen }) => (menuOpen ? 0 : 100)}vw);
  visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
  transition: ${({ theme }) => theme.transition};

  ${devices.tablet} {
    display: none;
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: ${({ theme }) => theme.typography.colors.selected};
    font-family: ${({ theme }) => theme.typography.fontMono};
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 10px;
      counter-increment: item 1;
      font-size: ${({ theme }) =>
        `clamp(${theme.typography.fontSizes.textSm}, 4vw, ${theme.typography.fontSizes.textLg})`};

      ${devices.tablet} {
        margin: 0 auto 20px;
      }

      &::before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const HamburgerMenu: React.FC<Props> = ({ navLinks, ...themeProps }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const menuFocusables: HTMLElement[] = [];
  let firstFocusableEl: HTMLElement;
  let lastFocusableEl: HTMLElement;

  const setFocusables = () => {
    buttonRef.current && menuFocusables.push(buttonRef.current);
    navRef.current && menuFocusables.push(...Array.from(navRef.current.querySelectorAll('a')));

    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e: KeyboardEvent) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (e: KeyboardEvent) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e: UIEvent) => {
    if ((e.currentTarget as Window)?.innerWidth > deviceSizes.tablet) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <StyledMenu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <StyledHamburgerMenu>
          <StyledHamburgerThemeToggle {...themeProps} menuOpen={menuOpen} />
          <StyledHamburgerButton
            onClick={toggleMenu}
            menuOpen={menuOpen}
            ref={buttonRef}
            aria-label="Menu"
          >
            <div className="ham-box">
              <div className="ham-box-inner" />
            </div>
          </StyledHamburgerButton>
        </StyledHamburgerMenu>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link href={url} onClick={() => setMenuOpen(false)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}

            <a
              href="/resume.pdf"
              className="resume-link"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default HamburgerMenu;
