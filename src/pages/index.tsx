import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import { Layout, SEO } from '@components';
import { AboutSection, ContactSection, HeroSection } from '@components/sections';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <HeroSection />
        <AboutSection />
        <div id="jobs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid amet
          aperiam aut cum delectus dolorum ducimus eaque eius eos ex, facere fugiat in incidunt
          ipsam iusto libero molestiae nihil nostrum nulla omnis perspiciatis quae quaerat qui quia
          repellendus repudiandae sint soluta sunt ullam ut veniam voluptas! Adipisci aut blanditiis
          corporis dolore dolorem earum exercitationem incidunt itaque maiores molestiae
          necessitatibus obcaecati perferendis provident quasi quibusdam quidem reiciendis,
          repellendus reprehenderit similique tempora temporibus tenetur voluptatem. Accusantium
          aliquam, architecto asperiores aspernatur atque aut blanditiis consequuntur cum debitis
          dolore doloremque dolores doloribus dolorum ex excepturi illo in ipsa ipsum iusto maxime
          molestias nemo officiis omnis perspiciatis quae ratione repellendus repudiandae saepe
          sequi sunt tempora tempore totam ullam vero vitae voluptates voluptatibus. A accusantium
          animi aspernatur assumenda aut autem deleniti ducimus ea error, exercitationem
          praesentium, provident quidem quos repudiandae temporibus voluptate voluptatem? Ab
          adipisci amet animi architecto aspernatur corporis distinctio, doloribus eaque eius,
          eligendi et excepturi facilis harum hic illo nam nihil nostrum obcaecati officiis optio
          qui quo rem sapiente soluta suscipit voluptas voluptate voluptatem! Ad aliquam aliquid
          consequuntur cumque, dolor, eveniet fuga ipsa ipsum iste, itaque iusto laudantium nihil
          odit perspiciatis saepe unde vero voluptas. Accusamus adipisci aliquam asperiores autem
          consequatur dolor dolore dolorem ea, earum, esse est et excepturi expedita facilis fugiat
          impedit in inventore itaque magnam minima necessitatibus nisi optio perferendis quae
          repellat reprehenderit sed vitae? Aliquid, asperiores at ea eaque eligendi et eum
          exercitationem facilis fuga in iure maiores nisi, officia quae, reiciendis rem suscipit
          tempora ullam unde voluptatibus! Ad corporis debitis eius est fuga fugiat fugit ipsa
          itaque iure laborum magnam molestiae molestias omnis optio possimus qui sapiente sed,
          similique suscipit ut voluptas voluptate voluptatum. A culpa cumque cupiditate dolorem
          enim, fugit hic in ipsa iure labore molestias obcaecati officiis porro tempora ut, vitae
          voluptate voluptatem. Asperiores distinctio doloribus dolorum facere, fugit harum ipsam
          iste laborum laudantium libero nam quaerat quas quidem quis rerum sapiente unde voluptate
          voluptatem! Eaque est, eum obcaecati perspiciatis quisquam veritatis voluptates! Accusamus
          cumque delectus ullam? Accusantium adipisci aliquam amet architecto asperiores assumenda
          at aut commodi delectus earum eum eveniet fuga harum id illo in magnam minima officia,
          omnis placeat praesentium quia sequi sit tempore temporibus unde vitae. Aliquid aperiam
          architecto assumenda dicta dolore dolorem eos fugit inventore ipsum maxime nihil optio
          praesentium quam, quis quod sint totam voluptatibus! Adipisci architecto assumenda aut,
          autem delectus dolorum ducimus eligendi exercitationem hic labore laboriosam minima
          possimus praesentium qui quia quisquam rem sunt tenetur. Autem, dolor ipsum minus nam
          neque nobis praesentium rerum! Animi doloribus hic ipsam iure provident, quod. Accusantium
          ad adipisci architecto dolorum eius, ex exercitationem labore laboriosam molestiae
          molestias nemo odit perferendis perspiciatis placeat rerum. Accusantium animi debitis
          dignissimos distinctio dolor, dolorum est ex id iste laborum nisi numquam, odio omnis
          suscipit voluptate. Adipisci animi, atque blanditiis delectus dolor dolorum harum illum
          laudantium magni odit quae tenetur. Ab accusamus alias beatae in nisi nulla provident
          quibusdam quidem reiciendis tempora? Animi et odit quae qui, reiciendis vitae! Animi
          aspernatur assumenda cupiditate esse, laborum quo repellendus soluta vel voluptate. A ab
          adipisci architecto autem, cupiditate delectus doloremque ducimus error explicabo iusto
          laboriosam maiores minus nesciunt qui similique totam vero voluptate. Debitis dicta
          dolores dolorum earum illum ipsam, iste itaque magnam nobis quae quidem quo quod
          reiciendis reprehenderit tempora, temporibus voluptate, voluptatum. Ab at autem, cum
          delectus dicta doloremque esse exercitationem, illum impedit ipsa iure laboriosam nemo
          nesciunt nisi nobis nulla numquam obcaecati odit officia optio porro quam quia sapiente
          suscipit tempora veniam voluptatem? Accusamus fuga, tempora. Accusamus ad aliquam
          asperiores cumque deleniti, dicta doloribus dolorum ducimus ea, eaque eius eveniet ex
          excepturi exercitationem fugit incidunt magni natus nobis numquam obcaecati officia optio
          perferendis placeat provident quas quia recusandae rerum, sunt temporibus velit. A, ad
          cumque delectus deserunt dolorem error et facilis fuga laudantium libero mollitia officia
          perspiciatis quod, veniam voluptatibus. Ad, alias aliquid at blanditiis corporis deleniti
          dolorem dolores dolorum eius eligendi error eum facere, incidunt iure laboriosam magni nam
          neque nesciunt nisi nostrum odio officiis optio quam quibusdam quisquam recusandae
          repellat reprehenderit, rerum sunt suscipit tempora tenetur veniam voluptatum. Fugit illo
          tempore vel voluptas? Deleniti earum eum ex fugiat incidunt minima quasi recusandae sit
          suscipit tempora? Ab accusantium animi dicta esse itaque laboriosam neque numquam officia
          qui sunt. Adipisci aliquid atque, beatae consequuntur debitis eos, exercitationem expedita
          facilis in inventore ipsa ipsam iusto necessitatibus obcaecati odit quae quaerat quam quis
          repudiandae rerum sunt tempora veritatis voluptas! Accusamus aspernatur autem consequatur
          dicta dolor, dolorem ducimus est eveniet hic illo impedit, ipsum labore libero magni modi
          non obcaecati, perferendis provident recusandae reiciendis saepe temporibus veritatis
          voluptatum. Est fugiat harum ipsum itaque necessitatibus omnis, placeat quo recusandae
          sint voluptatem. Accusantium adipisci, amet deserunt ea eligendi est facere, facilis fuga
          harum hic illum inventore libero modi necessitatibus nesciunt non nulla obcaecati, odio
          odit pariatur porro quaerat rerum sapiente voluptate voluptatum! Ab blanditiis hic
          laudantium minus neque optio perspiciatis quod suscipit totam voluptas. Consectetur, ex
          perspiciatis. A, ad adipisci assumenda blanditiis consectetur delectus deserunt ducimus
          error eum id ipsam ipsum, iusto libero maxime modi molestiae numquam quae quam quas quia
          quis quos recusandae sapiente sint sit tenetur vel voluptate. Amet, aspernatur earum hic
          minima officia pariatur quia sunt. Amet architecto beatae blanditiis commodi consectetur
          consequuntur dicta dolor doloremque dolores harum hic illo inventore ipsam laboriosam
          magnam maxime nemo neque nihil nostrum odio perferendis quaerat quibusdam, quo recusandae
          repellat repellendus sapiente sed sit soluta sunt tempora veniam voluptate voluptatum.
          Aperiam assumenda commodi deleniti, dicta doloribus earum est ex facilis fugit, illo iste
          labore libero minima minus nemo officia possimus quas similique tempore veniam. Aliquid
          animi aperiam earum est excepturi expedita facere fugit harum libero mollitia odit optio
          perferendis, placeat sed ullam voluptatem voluptatibus. Aspernatur, beatae, molestiae.
          Dolorum error illum impedit quam qui ratione rem voluptas voluptatem? Adipisci, cupiditate
          deleniti deserunt dolores itaque nisi omnis quam quibusdam sint soluta tenetur veritatis.
          Architecto atque cumque deleniti, dicta laborum magnam minima necessitatibus omnis
          perspiciatis praesentium quas, quod totam voluptates. Adipisci deleniti distinctio
          explicabo inventore nemo officia provident quaerat quas saepe veniam? Maiores, rerum
          temporibus.
        </div>
        <ContactSection />
      </StyledMainContainer>
    </Layout>
  );
};

export const Head: React.FC = () => <SEO />;

export default IndexPage;
