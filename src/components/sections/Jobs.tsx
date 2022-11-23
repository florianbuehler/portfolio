import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import { getMonthAndYearDisplayDate, getScrollRevealConfig, scrollReveal } from '@utils';

type StaticQueryDataNode = {
  frontmatter: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    url: string;
  };
  html: string;
};

type StaticQueryData = {
  jobs: {
    edges: { node: StaticQueryDataNode }[];
  };
};

const StyledJobsSection = styled.section`
  max-width: 700px;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.text2Xl};

  .slick-dots {
    > li > button::before {
      font-size: 8px;
      color: ${({ theme }) => theme.colors.primary};
    }
    > li.slick-active > button::before {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 600px) {
    //display: block;
    min-height: 140px;
  }

  // Prevent container from jumping
  @media (min-width: 700px) {
    min-height: 140px;
  }
`;

const StyledArrow = styled.button`
  height: 22px;

  &&::before {
    content: none;
  }

  svg {
    height: 100%;
    fill: ${({ theme }) => theme.typography.colors.text};

    &:hover {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const StyledJob = styled.article`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: ${({ theme }) => theme.typography.fontSizes.text2Xl};
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .range {
    margin-bottom: 25px;
    color: ${({ theme }) => theme.typography.colors.highlight};
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
  }
`;

const JobsSection: React.FC = () => {
  const data = useStaticQuery<StaticQueryData>(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___startDate], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              startDate
              endDate
              location
              url
            }
            html
          }
        }
      }
    }
  `);

  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sectionRef.current && scrollReveal?.reveal(sectionRef.current, getScrollRevealConfig());
  }, [prefersReducedMotion]);

  const jobsData = data.jobs.edges;

  return (
    <StyledJobsSection id="jobs" ref={sectionRef}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <StyledSlider
        dots
        infinite
        speed={500}
        prevArrow={
          <StyledArrow>
            <Icon name="chevron-left" />
          </StyledArrow>
        }
        nextArrow={
          <StyledArrow>
            <Icon name="chevron-right" />
          </StyledArrow>
        }
      >
        {jobsData.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, company, startDate, endDate, url } = frontmatter;

          return (
            <StyledJob key={`jobs - ${i}`}>
              <h3>
                <span>{title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={url} className="inline-link">
                    {company}
                  </a>
                </span>
              </h3>
              <p className="range">
                {getMonthAndYearDisplayDate(new Date(startDate))} -{' '}
                {new Date(endDate) > new Date(Date.now())
                  ? 'Present'
                  : getMonthAndYearDisplayDate(new Date(endDate))}
              </p>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </StyledJob>
          );
        })}
      </StyledSlider>
    </StyledJobsSection>
  );
};

export default JobsSection;
