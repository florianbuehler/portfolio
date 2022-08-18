import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { Email, Loader } from '../components';
import { GlobalStyle, theme } from '../styles';

type Props = {
  children?: React.ReactNode;
} & Pick<PageProps, 'location'>;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout: React.FunctionComponent<Props> = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {isLoading && isHome ? (
            <Loader onLoadingCompleted={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Email delayInSec={isHome ? 2000 : 0} />
              <div id="content">{children}</div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

export default Layout;
