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
      background-color: ${({ theme }) => theme.bg.color};
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

  const skills = ['TypeScript', 'JavaScript (ES6+)', 'React', 'C#', 'Node.js', 'Kubernetes'];

  return (
    <StyledAboutSection id="about" ref={sectionRef}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Florian and I enjoy creating things that live on the internet. My
              interest in web development started back in Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolorum earum eos maiores nesciunt numquam velit.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad consectetur,
              doloribus, enim ipsam laborum laudantium libero nemo nihil perspiciatis quisquam
              reiciendis, sed voluptatem voluptatum. A adipisci eveniet exercitationem harum
              inventore iusto nesciunt omnis, quod rerum, sapiente soluta, vitae?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, est nam nostrum quam
              rerum soluta!
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
