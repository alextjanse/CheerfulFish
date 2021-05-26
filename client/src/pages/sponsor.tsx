import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function SponsorPage() {
  return (
    <div>
      <Head>
        <title>Sponsoracties | Cheerful Fish</title>
      </Head>
      <div>
        <Title>Acties</Title>
        <Paragraph>
          Hier komen alle acties te staan waar sponsorgeld voor gezocht wordt.
          Elke actie krijgt ook zijn eigen pagina met meer uitleg.
          Voorbeeld: wij gaan naar België heen en weer fietsen.
        </Paragraph>
      </div>
    </div>
  );
}

export default SponsorPage;
