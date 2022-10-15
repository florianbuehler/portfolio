import React from 'react';
import styled from 'styled-components';
import { Side } from '@components';

type Props = {
  email: string;
  delayInSec?: number;
};

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.typography.colors.highlight};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) => theme.typography.fontSizes.text2Xs};
    line-height: ${({ theme }) => theme.typography.fontSizes.textLg};
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email: React.FC<Props> = ({ delayInSec, email }) => (
  <Side delayInSec={delayInSec} position="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
