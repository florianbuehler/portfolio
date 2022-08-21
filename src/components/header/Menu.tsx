import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { devices } from '../../styles';
import { NavLink } from './types';

type MenuProps = {
  navLinks: NavLink[];
  isMounted: boolean;
  delayInSec?: number;
};

type ReducedMotionMenuProps = {
  navLinks: NavLink[];
};

const StyledLinks = styled.div`
  display: none;
  align-items: center;

  ${devices.tablet} {
    display: flex;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: ${({ theme }) => theme.typography.fontSizes.textXs};

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.primary};
          font-size: ${({ theme }) => theme.typography.fontSizes.text2Xs};
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
  }
`;

const ResumeLink = (
  <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    Resume
  </a>
);

export const Menu: React.FC<MenuProps> = ({ navLinks, isMounted, delayInSec }) => {
  const delay = !!delayInSec;
  const fadeDownClass = delay ? 'fadedown' : '';

  return (
    <StyledLinks>
      <ol>
        <TransitionGroup component={null}>
          {isMounted &&
            navLinks &&
            navLinks.map(({ url, name }, i) => (
              <CSSTransition key={i} classNames={fadeDownClass} timeout={delayInSec || 0}>
                <li key={i} style={{ transitionDelay: `${delay ? i * 100 : 0}ms` }}>
                  <Link to={url}>{name}</Link>
                </li>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ol>

      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={fadeDownClass} timeout={delayInSec || 0}>
            <div style={{ transitionDelay: `${delay ? navLinks.length * 100 : 0}ms` }}>
              {ResumeLink}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledLinks>
  );
};

export const ReducedMotionMenu: React.FC<ReducedMotionMenuProps> = ({ navLinks }) => {
  return (
    <StyledLinks>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
      </ol>
      <div>{ResumeLink}</div>
    </StyledLinks>
  );
};
