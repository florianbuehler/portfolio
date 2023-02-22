import React, { useState, useEffect, useCallback } from 'react';
import anime from 'animejs';
import styled from 'styled-components';
import { LogoIcon } from 'components/icons';

type Props = {
  onLoadingCompleted: () => void;
};

type StyledProps = {
  isMounted: boolean;
};

const StyledLoader = styled.div<StyledProps>`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bg.darker};
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: ${({ theme }) => theme.transition};
    opacity: ${(props) => (props.isMounted ? 1 : 0)};

    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;

      #F {
        opacity: 0;
      }
    }
  }
`;

const Loader: React.FC<Props> = ({ onLoadingCompleted }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = useCallback(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    const loader = anime.timeline({
      complete: () => onLoadingCompleted()
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        // eslint-disable-next-line import/no-named-as-default-member
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: '#logo #F',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1
      });
  }, [onLoadingCompleted]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <div className="logo-wrapper">
        <LogoIcon />
      </div>
    </StyledLoader>
  );
};

export default Loader;
