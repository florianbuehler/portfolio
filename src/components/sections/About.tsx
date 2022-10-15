import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';
import { devices } from '@styles';
import { getScrollRevealConfig, scrollReveal } from '@utils';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: block;

    ${devices.tablet} {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: 50px;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: ${({ theme }) => theme.typography.fontMono};
      font-size: ${({ theme }) => theme.typography.fontSizes.textXs};

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  margin: 50px auto 0;
  width: 70%;

  ${devices.tablet} {
    max-width: 300px;
    width: 100%;
    margin: 0;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: ${({ theme }) => theme.borderRadius};
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: ${({ theme }) => theme.transition};
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: ${({ theme }) => theme.transition};
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.bg.base};
      mix-blend-mode: screen;
    }

    &:after {
      border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sectionRef.current && scrollReveal?.reveal(sectionRef.current, getScrollRevealConfig());
  }, [prefersReducedMotion]);

  const skills = [
    'React',
    'TypeScript',
    'JavaScript (ES6+)',
    'Styled Components',
    'C#',
    'Kubernetes'
  ];

  return (
    <StyledAboutSection id="about" ref={sectionRef}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Florian and I enjoy creating things that live on the internet. My
              interest in web development started back in 2016 when I decided to write a small tool
              for some stock analysis — turns out hacking together some code to collect data from
              different webpages taught me a lot about HTML &amp; how the web works in general!
            </p>

            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://zeb-consulting.com/en-DE/">
                a medium-sized enterprise
              </a>
              , and{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://www.d-fine.com/en/">
                a consulting firm
              </a>{' '}
              with projects with different clients - including{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.deutsche-bank.de/pk.html"
              >
                a huge corporation
              </a>
              ,{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.boerse-stuttgart.de/en/"
              >
                a stock exchange
              </a>{' '}
              and{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.boerse-stuttgart.de/en/about-us/company-structure/our-companies/blocknox-gmbh/"
              >
                a start-up
              </a>
              . These days my main focus is building reliable and highly secure solutions at{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.boerse-stuttgart.de/en/about-us/company-structure/our-companies/blocknox-gmbh/"
              >
                blocknox
              </a>{' '}
              for a variety of different challenges.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../assets/images/me.jpg"
              width={650}
              quality={95}
              formats={['auto', 'webp', 'avif']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
