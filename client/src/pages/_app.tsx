/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'antd/dist/antd.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Header from '@components/Header/Header';
import { Layout } from 'antd';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Layout.Content style={{ marginTop: 84, minHeight: '100vh', marginBottom: 20 }}>
        <Component {...pageProps} />
      </Layout.Content>
    </Layout>
  );
}

export default MyApp;
