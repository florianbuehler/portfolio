import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { Hero } from '../components/sections';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
      </StyledMainContainer>
    </Layout>
  );
};

export default IndexPage;
