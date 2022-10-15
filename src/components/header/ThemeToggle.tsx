import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { ThemeName } from '@styles';

type Props = {
  themeName: ThemeName;
  onThemeToggle: (theme: 'dark' | 'light') => void;
  className?: string;
};

const StyledThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin-right: -4px;
  margin-left: 1.25rem;
  border: none;
  background: transparent;
  width: 30px;

  color: ${({ theme }) => theme.colors.lightSlate};
  transition: ${({ theme }) => theme.transition};

  svg {
    height: 22px;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }

  &.dark {
    margin-bottom: 3px;
  }
`;

const ThemeToggle: React.FC<Props> = ({ themeName, onThemeToggle, className }) => {
  const toggleTheme = () => {
    onThemeToggle(themeName === 'dark' ? 'light' : 'dark');
  };

  return (
    <StyledThemeToggle
      onClick={toggleTheme}
      className={className ? `${className} ${themeName}` : themeName}
    >
      <Icon name={themeName === 'dark' ? 'moon-with-stars' : 'sun'} />
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
