import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';
import { getScrollRevealConfig, scrollReveal } from '@utils';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.typography.fontSizes.text2Xl};

    @media (max-width: 600px) {
      //display: block;
      min-height: 140px;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 140px;
    }
  }
`;

const JobsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sectionRef.current && scrollReveal?.reveal(sectionRef.current, getScrollRevealConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledJobsSection id="jobs" ref={sectionRef}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <h3>Stay tuned - coming soon...</h3>
      </div>
    </StyledJobsSection>
  );
};

export default JobsSection;
