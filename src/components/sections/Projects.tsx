import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import { Icon } from 'components/icons';
import { usePrefersReducedMotion } from 'hooks';
import { devices } from 'styles';
import { Project } from 'types';
import { getScrollRevealConfig, sortProjectsByDate } from 'utils';

type Props = {
  projects: Project[];
};

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: ${({ theme }) => `clamp(24px, 5vw, ${theme.typography.fontSizes.heading})`};
  }

  .archive-link {
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) => theme.typography.fontSizes.textSm};

    &::after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    ${devices.laptop} {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: ${({ theme }) => theme.transition};

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.bg.highlight};
    transition: ${({ theme }) => theme.transition};
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: ${({ theme }) => theme.colors.primary};
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: ${({ theme }) => theme.typography.colors.highlight};

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: ${({ theme }) => theme.typography.colors.title};
    font-size: ${({ theme }) => theme.typography.fontSizes.text2Xl};

    a {
      position: static;

      &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: ${({ theme }) => theme.typography.colors.emphasizedText};
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: ${({ theme }) => theme.typography.fontMono};
      font-size: ${({ theme }) => theme.typography.fontSizes.text2Xs};
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const ProjectsSection: React.FC<Props> = ({ projects }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitleRef = useRef(null);
  const revealArchiveLinkRef = useRef(null);
  const revealProjectsRef = useRef<HTMLElement[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const reveal = async () => {
      const scrollReveal = (await import('scrollreveal')).default;

      revealTitleRef.current &&
        scrollReveal().reveal(revealTitleRef.current, getScrollRevealConfig());
      revealArchiveLinkRef.current &&
        scrollReveal().reveal(revealArchiveLinkRef.current, getScrollRevealConfig());
      revealProjectsRef.current.forEach((ref, i) =>
        scrollReveal().reveal(ref, getScrollRevealConfig(i * 100))
      );
    };

    void reveal();
  }, [prefersReducedMotion]);

  const GRID_LIMIT = 6;
  const projectsToInclude = projects
    .filter((project) => project.frontmatter.showInProjects)
    .sort(sortProjectsByDate);
  const firstGridLimitProjects = projectsToInclude.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projectsToInclude : firstGridLimitProjects;

  const projectInner = (project: Project) => {
    const { frontmatter, html } = project;
    const { github, external, title, tech } = frontmatter;

    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="folder" />
            </div>
            <div className="project-links">
              {github && (
                <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <Icon name="github" />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="external" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={external} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="project-description">
            <MDXRemote {...html} />
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitleRef}>Other Noteworthy Projects</h2>

      <Link className="inline-link archive-link" href="/archive" ref={revealArchiveLinkRef}>
        view the archive
      </Link>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <StyledProject key={i}>{projectInner(project)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={(el) => (revealProjectsRef.current[i] = el!)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`
                    }}
                  >
                    {projectInner(project)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      {projectsToInclude.length > GRID_LIMIT && (
        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
