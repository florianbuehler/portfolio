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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta dolorem eligendi odit quia sint sunt vel?
          Aperiam delectus doloremque, error ipsum molestiae optio quaerat, quod sed soluta temporibus voluptatibus!
        </p>
      </StyledMainContainer>
    </Layout>
  );
};

export default IndexPage;
