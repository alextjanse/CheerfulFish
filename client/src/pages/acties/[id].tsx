import React from 'react';
import Head from 'next/head';
import { Button, Image, Statistic, Typography } from 'antd';
import DonationForm from '@components/Forms/DonationForm';
import Action from '@models/Action';

const { Title, Paragraph } = Typography;

interface ActionPageProps {
  action: Action;
}

function ActionPage(props: ActionPageProps) {
  const { action } = props;
  const { title, progress, target, description, imageUrl } = action;

  return (
    <div>
      <Head>
        <title>{title} | Cheerful Fish</title>
      </Head>
      <div>
        <Title>{title}</Title>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/actions/${imageUrl}`}
        />
        <Paragraph>
          {description}
        </Paragraph>
        <Statistic
          title="Voortgang"
          value={progress}
          prefix="€"
          suffix={`/ ${target}`}
        />
        <DonationForm />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let actions: any;

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/actions`)
    .then((res) => res.json())
    .then((json) => { actions = json; });
  
    const paths = actions.map((action) => ({
      params: { id: action.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }): Promise<{ props: ActionPageProps }> {
  const { id } = params;

  let action: Action;

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/actions/action?id=${id}`)
    .then((res) => res.json())
    .then((json) => { action = json; });

  return { props: { action } };
}

export default ActionPage;
