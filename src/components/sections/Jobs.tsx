import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';
import { getScrollRevealConfig, scrollReveal } from '@utils';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur cum cupiditate
        ducimus eaque, esse, est iste molestiae nesciunt nihil nulla officia, omnis optio
        perferendis porro possimus reprehenderit! Aperiam asperiores eveniet itaque labore natus
        possimus quam ut? Accusamus asperiores aspernatur aut consequuntur delectus deserunt dicta
        dolor dolore ducimus esse eum eveniet excepturi id illo impedit ipsa itaque iusto labore
        libero magnam maiores minima minus perferendis quae quidem quo, reiciendis repellat
        repellendus sapiente sed sint suscipit temporibus vel velit veritatis vitae, voluptas. Animi
        doloremque iure laudantium minus possimus quia quis quisquam sit voluptatum! Adipisci
        assumenda doloribus, eos eveniet minus saepe tempore totam vero vitae. Accusamus alias
        distinctio dolor doloremque eum, ex, magni nam natus neque optio quae quas quisquam
        reiciendis sit ullam. Aut, deleniti doloribus error et eveniet, ex fugiat omnis pariatur,
        quidem quod reiciendis rerum sint. Aliquam assumenda, beatae consequuntur cum dolor
        laboriosam laudantium porro quidem sed sequi temporibus, veritatis vitae! Ab alias amet
        animi, aperiam aspernatur blanditiis cum debitis, dolor, ducimus ex ipsam labore minus
        perferendis reprehenderit sequi sit veniam? Aliquam eaque iure optio quaerat quod temporibus
        voluptatibus? Aut consequuntur corporis cupiditate delectus dignissimos dolores eos est eum
        hic in, iusto laborum maxime minus mollitia nisi placeat possimus quaerat, quam quasi
        reiciendis repudiandae saepe sapiente veritatis voluptatem voluptatibus? Accusamus
        accusantium alias amet aspernatur autem dolor ea enim error harum, illum incidunt molestias
        natus officia omnis perspiciatis, quaerat, qui quia quibusdam quidem quo quod ratione soluta
        tempora veritatis voluptatum? Alias iure libero ullam! Dolores eligendi esse explicabo illum
        molestias nam nesciunt quae qui quos, rerum! Ab cumque debitis, enim eos et eveniet, ex
        exercitationem expedita explicabo fugiat illum iusto labore magnam officia perspiciatis
        praesentium, quasi sed similique. Accusantium at culpa dignissimos dolorem eum excepturi
        iste odio odit possimus praesentium repellat, rerum velit voluptatem. Asperiores eos nisi
        odio unde voluptatibus! Quam.
      </div>
    </StyledJobsSection>
  );
};

export default JobsSection;
