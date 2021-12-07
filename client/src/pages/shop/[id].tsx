import React from 'react';
import Head from 'next/head';
import { Button, Image, Statistic, Typography } from 'antd';
import ShopItem from '@models/Shop';
import PurchaseForm from '@components/Forms/PurchaseForm';

const { Title, Paragraph } = Typography;

interface ShopItemPageProps {
  item: ShopItem;
}

function ShopItemPage(props: ShopItemPageProps) {
  const { item } = props;
  const { title, description, imageUrl, price, stock, unlimited } = item;

  console.log(item);

  return (
    <div>
      <Head>
        <title>{title} | Cheerful Fish</title>
      </Head>
      <div>
        <Title>{title}</Title>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/shop/${imageUrl}`}
        />
        <Paragraph>
          {description}
        </Paragraph>
        <Statistic
          title="Prijs"
          value={price}
          prefix="€"
        />
        <Statistic
          title="Voorraad"
          value={unlimited ? '∞' : stock}
        />
        <PurchaseForm
          item={item}
        />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let actions: any;

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/shop`)
    .then((res) => res.json())
    .then((json) => { actions = json; });
  
    const paths = actions.map((action) => ({
      params: { id: action.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }): Promise<{ props: ShopItemPageProps }> {
  const { id } = params;

  let item: ShopItem;

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/shop/item?id=${id}`)
    .then((res) => res.json())
    .then((json) => { item = json; });

  return { props: { item } };
}

export default ShopItemPage;
