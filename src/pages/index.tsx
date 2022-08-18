import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components';
import { HeroSection } from '../components/sections';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <HeroSection />
      </StyledMainContainer>
    </Layout>
  );
};

export default IndexPage;
