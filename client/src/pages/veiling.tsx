import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function AuctionPage() {
  return (
    <div>
      <Head>
        <title>Veiling | Cheerful Fish</title>
      </Head>
      <div>
        <Title>Veiling</Title>
        <Paragraph>
          Hier komen alle producten te staan die worden geveild.
          Elk product krijgt ook zijn eigen pagina en eigen deadline,
          zodat je goed kan zien wanneer iets verkocht wordt.
          Voorbeeld: veiling van oude sticky merchandise.
        </Paragraph>
      </div>
    </div>
  );
}

export default AuctionPage;
