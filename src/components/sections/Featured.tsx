import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@hooks';
import { getScrollRevealConfig, scrollReveal } from '@utils';

const Featured: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    titleRef.current && scrollReveal?.reveal(titleRef.current, getScrollRevealConfig());
  }, [prefersReducedMotion]);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={titleRef}>
        Some Things I’ve Built
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt ipsam placeat!
        Atque nesciunt numquam quae quam veritatis vero voluptatum? Aperiam corporis cupiditate
        distinctio, eos id magni modi nobis quas, quos sit sunt tenetur. A aliquid aut deleniti
        dolorem eaque earum est eum fugit, impedit in incidunt ipsam, iusto mollitia nesciunt nisi
        officiis quasi repellendus sapiente sed unde vel veniam voluptatem. Assumenda deleniti
        dolorem est explicabo facere illum impedit inventore libero magni, minus modi nemo nesciunt
        nisi nobis pariatur perspiciatis placeat possimus quaerat recusandae reiciendis sint
        temporibus, tenetur, unde vero voluptates. Aliquam animi consectetur corporis dolorum fuga
        ipsum nostrum veniam voluptates. Aspernatur commodi consequatur deserunt dolor dolore
        dolorum ducimus eligendi error fugiat illo in inventore molestias nemo neque nesciunt, nihil
        nostrum, odio quaerat quisquam quod rerum sed similique tempora totam voluptate? A cumque,
        dolorem fuga impedit in laboriosam laborum perferendis quasi quisquam recusandae repellendus
        sapiente suscipit velit vitae voluptatem. Aspernatur consequatur fugit itaque magnam maiores
        quia quibusdam. Blanditiis, eaque enim libero magnam minima mollitia optio placeat sequi!
        Atque dolorem dolorum eligendi impedit inventore numquam odio, possimus quidem quo rem rerum
        temporibus vel! Aspernatur consectetur consequatur dignissimos distinctio dolorem, ex
        impedit labore minus molestias odio odit optio possimus repellendus reprehenderit vel, vero
        voluptas. Ab ad aliquam aliquid architecto asperiores aspernatur blanditiis delectus dolor
        earum et illum impedit inventore ipsa ipsam ipsum iste iure magnam maxime minus modi
        molestiae nam necessitatibus nisi, nobis odit perferendis quas ratione reiciendis repellat
        temporibus veritatis vero voluptates voluptatibus! A amet architecto doloribus, ex fugiat
        magnam nemo non nostrum quod reprehenderit totam voluptate? Accusamus, asperiores cupiditate
        dolore ducimus eligendi eos eveniet expedita facere, impedit libero magni modi nostrum
        praesentium quaerat quas quidem reiciendis, tempore tenetur! Accusamus beatae consectetur
        corporis culpa cum eos explicabo magnam maiores nemo nulla obcaecati pariatur, placeat,
        praesentium quasi rem rerum sequi, sint tempora temporibus voluptates. Ab accusamus adipisci
        aliquam blanditiis corporis cum deserunt dignissimos distinctio, earum facere in labore
        laboriosam laborum natus numquam odit perferendis porro quibusdam rerum sed sequi soluta
        suscipit ullam ut voluptate! Dicta distinctio eligendi explicabo nostrum omnis quasi
        temporibus vitae! Accusamus accusantium at commodi consequatur cum cumque deserunt
        dignissimos eos esse eum ex excepturi facere harum in nam natus, necessitatibus nesciunt
        nihil officia officiis omnis optio pariatur placeat porro praesentium quasi quia quis, quod
        recusandae rerum sint tempora temporibus voluptatem? Commodi cum ea earum, maxime quam sunt
        suscipit? Amet aut autem eos fugiat in iusto odit possimus sapiente tempore?
      </p>
    </section>
  );
};

export default Featured;
