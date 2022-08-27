import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import { Layout, SEO } from '@components';
import {
  AboutSection,
  ContactSection,
  FeaturedSection,
  HeroSection,
  JobsSection,
  ProjectsSection
} from '@components/sections';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <HeroSection />
        <AboutSection />
        <JobsSection />
        <FeaturedSection />
        <ProjectsSection />
        <ContactSection />
      </StyledMainContainer>
    </Layout>
  );
};

export const Head: React.FC = () => <SEO />;

export default IndexPage;
