import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Icon } from 'components/icons';
import { usePrefersReducedMotion } from 'hooks';
import { devices } from 'styles';
import { Project } from 'types';
import { getScrollRevealConfig, sortProjectsByPosition } from 'utils';

type Props = {
  projects: Project[];
};

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  ${({ theme }) => theme.mixins.boxShadow};

  ${devices.laptop} {
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 30px;

    ${devices.tablet} {
      margin-bottom: 70px;
    }

    ${devices.laptop} {
      margin-bottom: 100px;
    }
  }

  .project-content {
    position: relative;
    grid-row: 1 / -1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    z-index: 5;
    padding: 30px 25px 20px;

    ${devices.tablet} {
      grid-column: 1 / 9;
      padding: 40px 40px 30px;
    }

    ${devices.laptop} {
      grid-column: 1 / 7;
      padding: 0;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
    font-weight: 400;
  }

  .project-title {
    font-size: clamp(24px, 5vw, 28px);
    color: ${({ theme }) => theme.colors.white};

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

    ${devices.tablet} {
      color: ${({ theme }) => theme.typography.colors.title};
      margin: 0 0 20px;
    }
  }

  .project-description {
    position: relative;
    z-index: 2;
    padding: 20px 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: transparent;
    color: ${({ theme }) => theme.typography.colors.emphasizedText};
    font-size: ${({ theme }) => theme.typography.fontSizes.textLg};
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }

    ${devices.tablet} {
      background-color: ${({ theme }) => theme.bg.highlight};
      padding: 25px;
      ${({ theme }) => theme.mixins.boxShadow};
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: ${({ theme }) => theme.typography.colors.strongHighlight};
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 10px 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0 10px 5px 0;
      color: ${({ theme }) => theme.typography.colors.text};
      font-family: ${({ theme }) => theme.typography.fontMono};
      font-size: ${({ theme }) => theme.typography.fontSizes.textXs};
      white-space: nowrap;
    }

    ${devices.tablet} {
      margin: 25px 0 10px;

      li {
        margin: 0 20px 5px 0;
        color: ${({ theme }) => theme.typography.colors.highlight};
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${({ theme }) => theme.typography.colors.highlight};

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

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

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    height: 100%;
    opacity: 0.25;

    ${devices.tablet} {
      grid-column: 6 / -1;
      height: auto;
      opacity: 1;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &::before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: ${({ theme }) => theme.transition};
        background-color: #0f172a;
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: ${({ theme }) => theme.borderRadius};
      mix-blend-mode: multiply;

      object-fit: cover;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(50%);

      ${devices.tablet} {
        object-fit: none;
        height: auto;
        filter: grayscale(100%) contrast(1) brightness(90%);
      }
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 1 / -1;
      text-align: left;
      padding: 25px 25px 20px;

      ${devices.tablet} {
        grid-column: 5 / -1;
        padding: 40px 40px 30px;
        text-align: right;
      }

      ${devices.laptop} {
        grid-column: 7 / -1;
        padding: 0;
      }
    }

    .project-tech-list {
      justify-content: flex-start;

      ${devices.tablet} {
        justify-content: flex-end;
      }

      li {
        margin: 0 10px 5px 0;

        ${devices.tablet} {
          margin: 0 0 5px 20px;
        }
      }
    }

    .project-links {
      justify-content: flex-start;
      margin-left: -10px;
      margin-right: 0;

      ${devices.tablet} {
        justify-content: flex-end;
        margin-left: 0;
        margin-right: -10px;
      }
    }
    .project-image {
      grid-column: 1 / -1;

      ${devices.tablet} {
        grid-column: 1 / 8;
      }
    }
  }
`;

const FeaturedSection: React.FC<Props> = ({ projects }) => {
  const revealTitleRef = useRef<HTMLHeadingElement>(null);
  const revealProjectsRef = useRef<HTMLLIElement[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const reveal = async () => {
      const scrollReveal = (await import('scrollreveal')).default;

      revealTitleRef.current &&
        scrollReveal().reveal(revealTitleRef.current, getScrollRevealConfig());
      revealProjectsRef.current.forEach((ref, i) =>
        scrollReveal().reveal(ref, getScrollRevealConfig(i * 100))
      );
    };

    void reveal();
  }, [prefersReducedMotion]);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitleRef}>
        Some Things I’ve Built
      </h2>

      <StyledProjectsGrid>
        {projects.sort(sortProjectsByPosition).map((project, i) => {
          const { frontmatter, content } = project;
          const { external, title, tech, github, coverUrl } = frontmatter;

          return (
            <StyledProject key={i} ref={(el) => (revealProjectsRef.current[i] = el!)}>
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>

                  <h3 className="project-title">
                    <a href={external} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  </h3>

                  <div
                    className="project-description"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: content }}
                  />

                  {tech.length && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}

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
              </div>

              <div className="project-image">
                {/*<a*/}
                {/*  href={external ? external : github ? github : '#'}*/}
                {/*  target="_blank"*/}
                {/*  rel="noreferrer"*/}
                {/*>*/}
                {coverUrl && <Image src={coverUrl} alt={title} className="img" fill quality={95} />}
                {/*</a>*/}
              </div>
            </StyledProject>
          );
        })}
      </StyledProjectsGrid>
    </section>
  );
};

export default FeaturedSection;
