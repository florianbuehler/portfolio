import React, { useRef, useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';
import { Layout, SEO } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import { devices } from '@styles';
import { getScrollRevealConfig, scrollReveal } from '@utils';

type PageData = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          date: string;
          github?: string;
          external?: string;
          tech: string[];
          company: string;
        };
        html: string;
      };
    }[];
  };
};

const StyledTableContainer = styled.div`
  margin: 50px -10px;

  ${devices.tablet} {
    margin: 100px -20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      display: none;

      ${devices.tablet} {
        display: table-cell;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.bg.highlight};
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 10px;

        ${devices.tablet} {
          padding-left: 20px;
        }
      }
      &:last-child {
        padding-right: 10px;

        ${devices.tablet} {
          padding-right: 20px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: ${({ theme }) => theme.borderRadius};
        border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
      }
      td:last-child {
        border-top-right-radius: ${({ theme }) => theme.borderRadius};
        border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
      }
    }

    td {
      &.year {
        padding-right: 10px;
        font-size: ${({ theme }) => theme.typography.fontSizes.textSm};

        ${devices.tablet} {
          padding-right: 20px;
          font-size: ${({ theme }) => theme.typography.fontSizes.textMd};
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: ${({ theme }) => theme.typography.colors.title};
        font-size: ${({ theme }) => theme.typography.fontSizes.textXl};
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: ${({ theme }) => theme.typography.fontSizes.textLg};
        white-space: nowrap;
      }

      &.tech {
        font-size: ${({ theme }) => theme.typography.fontSizes.text2Xs};
        font-family: ${({ theme }) => theme.typography.fontMono};
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;
        color: ${({ theme }) => theme.typography.colors.highlight};

        div {
          display: flex;
          align-items: center;

          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const ArchivePage: React.FC<PageProps<PageData>> = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;

  const revealTitleRef = useRef(null);
  const revealTableRef = useRef(null);
  const revealProjectsRef = useRef<HTMLTableRowElement[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    revealTitleRef.current && scrollReveal?.reveal(revealTitleRef.current, getScrollRevealConfig());
    revealTableRef.current &&
      scrollReveal?.reveal(revealTableRef.current, getScrollRevealConfig(200, 0));

    revealProjectsRef.current.forEach((ref, i) =>
      scrollReveal?.reveal(ref, getScrollRevealConfig(i * 10))
    );
  }, [prefersReducedMotion]);

  return (
    <Layout location={location}>
      <main>
        <header ref={revealTitleRef}>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTableRef}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const { date, github, external, title, tech, company } = node.frontmatter;
                  return (
                    <tr key={i} ref={(el) => (revealProjectsRef.current[i] = el!)}>
                      <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className="tech hide-on-mobile">
                        {tech?.length > 0 &&
                          tech.map((item, i) => (
                            <span key={i}>
                              {item}
                              {''}
                              {i !== tech.length - 1 && <span className="separator">&middot;</span>}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <div>
                          {external && (
                            <a href={external} aria-label="External Link">
                              <Icon name="external" />
                            </a>
                          )}
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="github" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

export const Head: React.FC = () => <SEO title="Archive" />;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            company
          }
          html
        }
      }
    }
  }
`;

export default ArchivePage;
