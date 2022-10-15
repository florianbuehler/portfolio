import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { ThemeName } from '@styles';

type Props = {
  themeName: ThemeName;
  onThemeToggle: (theme: 'dark' | 'light') => void;
};

const StyledThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin-right: -4px;
  margin-left: 1.25rem;

  transition: ${({ theme }) => theme.transition};

  svg {
    height: 22px;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ThemeToggle: React.FC<Props> = ({ themeName, onThemeToggle }) => {
  const toggleTheme = () => {
    onThemeToggle(themeName === 'dark' ? 'light' : 'dark');
  };

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      <Icon name={themeName === 'dark' ? 'moon-with-stars' : 'sun'} />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
