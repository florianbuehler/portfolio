import React, { useEffect, useState } from 'react';
import { PageProps } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { Email, Footer, Header, Loader, Social } from '@components';
import config from '@config';
import { getTheme, GlobalStyle, ThemeName } from '@styles';

type Props = {
  children?: React.ReactNode;
} & Pick<PageProps, 'location'>;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);

  #content {
    flex-grow: 1;
  }
`;

const Layout: React.FC<Props> = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const [themeName, setThemeName] = useState<ThemeName>('dark');

  useEffect(() => {
    if (localStorage.theme === 'light') {
      setThemeName('light');
    } else {
      setThemeName('dark');
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading, location]);

  const handleThemeToggle = (newThemeName: ThemeName): void => {
    setThemeName(newThemeName);
    localStorage.setItem('theme', newThemeName);
  };

  return (
    <div id="root">
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle />

        {isLoading && isHome ? (
          <Loader onLoadingCompleted={() => setIsLoading(false)} />
        ) : (
          <StyledContent>
            <Header
              navLinks={config.navLinks}
              delayInSec={isHome ? 2000 : 1000}
              themeName={themeName}
              onThemeToggle={handleThemeToggle}
            />
            <Social socialMedia={config.socialMedia} delayInSec={isHome ? 2000 : 1000} />
            <Email email={config.email} delayInSec={isHome ? 2000 : 1000} />
            <div id="content">{children}</div>
            <Footer
              socialMedia={config.socialMedia}
              projectUrl={config.projectUrl}
              delayInSec={isHome ? 0 : 1500}
            />
          </StyledContent>
        )}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
