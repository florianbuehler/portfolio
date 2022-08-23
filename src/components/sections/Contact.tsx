import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import config from '@config';
import { usePrefersReducedMotion } from '@hooks';
import { devices } from '@styles';
import { getScrollRevealConfig, scrollReveal } from '@utils';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 50px;
  text-align: center;

  ${devices.tablet} {
    margin: 0 auto 100px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.fontMono};
    font-size: ${({ theme }) => theme.typography.fontSizes.textMd};
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: ${({ theme }) => theme.typography.fontSizes.textSm};
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sectionRef.current && scrollReveal?.reveal(sectionRef.current, getScrollRevealConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledContactSection id="contact" ref={sectionRef}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <h2 className="title">Get In Touch</h2>

      <p>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${config.email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default ContactSection;
