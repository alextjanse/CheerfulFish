import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function AboutPage() {
  return (
    <div>
      <Head>
        <title>Over ons | Cheerful Fish</title>
      </Head>
      <div>
        <Title>Over ons</Title>
        <Paragraph>
          Hier komt een uitleg over hoe de betalingen werken en een FAQ.
        </Paragraph>
      </div>
    </div>
  );
}

export default AboutPage;
