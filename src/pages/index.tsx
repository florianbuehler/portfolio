import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import {
  AboutSection,
  ContactSection,
  FeaturedSection,
  HeroSection,
  Job,
  JobsSection,
  ProjectsSection
} from 'components/sections';
import { Project } from 'types';
import { getJobs, getProjects } from 'utils';

type Props = {
  jobs: Job[];
  projects: Project[];
};

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home: React.FC<Props> = ({ jobs, projects }) => {
  return (
    <>
      <Head>
        <title>Florian Bühler</title>
      </Head>
      <StyledMainContainer className="fillHeight">
        <HeroSection />
        <AboutSection />
        <JobsSection jobs={jobs} />
        <FeaturedSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </StyledMainContainer>
    </>
  );
};

// export const Head: React.FC = () => <SEO />;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jobs = getJobs();
  const projects = getProjects();

  return {
    props: {
      jobs,
      projects
    }
  };
};

export default Home;
