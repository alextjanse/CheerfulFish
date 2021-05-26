import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function HomePage() {
  return (
    <div>
      <Head>
        <title>Home | Cheerful Fish</title>
      </Head>
      <div>
        <Title>Welkom bij Cheerful Fish!</Title>
        <Paragraph>
          Hier komt tekst te staan om uit te leggen waar deze website voor is bedoeld.
        </Paragraph>
      </div>
    </div>
  );
}

export default HomePage;
