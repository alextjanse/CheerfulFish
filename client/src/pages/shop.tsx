import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function ShopPage() {
  return (
    <div>
      <Head>
        <title>Shop | Cheerful Fish</title>
      </Head>
      <div>
        <Title>Shop</Title>
        <Paragraph>
          Hier kunnen producten of diensten verkocht worden.
          Elke actie krijgt ook zijn eigen pagina.
          Voorbeeld: 5 euro voor een anytimer.
        </Paragraph>
      </div>
    </div>
  );
}

export default ShopPage;
