import React from 'react';
import Head from 'next/head';
import { List, Space, Statistic, Typography } from 'antd';
import ShopItem from '@models/Shop';


const { Title, Paragraph } = Typography;

interface ShopPageProps {
  shopItems: ShopItem[];
}

function ShopPage(props: ShopPageProps) {
  const { shopItems } = props;

  return (
    <div>
      <Head>
        <title>Shop | Cheerful Fish</title>
      </Head>
      <div>
        <Title>Shop</Title>
        <Paragraph>
          Hier komt info over de items in de shop en hoe het kopen werkt.
        </Paragraph>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={shopItems}
          renderItem={(item) => {
            return (
              <a href={`./shop/${item.id}`}>
                <List.Item
                  key={item.id}
                  actions={[
                    <Space>
                      <Statistic
                        title="Prijs"
                        value={item.price}
                        prefix="€"
                      />
                      <Statistic
                        title="Voorraad"
                        value={item.unlimited ? '∞' : item.stock}
                      />
                    </Space>
                  ]}
                  extra={
                    <img
                      height={200}
                      src={`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/shop/${item.imageUrl}`}
                    />
                  }
                >
                  <List.Item.Meta
                    title={item.title}
                  />
                  {item.description}
                </List.Item>
              </a>
            );
          }}
        />
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: ShopPageProps }> {
  let shopItems: ShopItem[];

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/shop`)
    .then((res) => res.json())
    .then((json) => { shopItems = json; });

  return { props: { shopItems } };
}

export default ShopPage;
