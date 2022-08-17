import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <StyledContent>{children}</StyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
