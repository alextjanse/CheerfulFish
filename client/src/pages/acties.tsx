import React from 'react';
import Head from 'next/head';
import { List, Space, Statistic, Typography } from 'antd';
import { CheckCircleOutlined, EuroCircleOutlined } from '@ant-design/icons';
import Action from '@models/Action';


const { Title, Paragraph } = Typography;

interface ActionsPageProps {
  actions: Action[];
}

function ActionsPage(props: ActionsPageProps) {
  const { actions } = props;

  return (
    <div>
      <Head>
        <title>Acties | Cheerful Fish</title>
      </Head>
      <div>
        <Title>Acties</Title>
        <Paragraph>
          Hier komt info over wat acties nou precies zijn. Acties zijn opdrachten die uitgevoerd worden
          als er een minimum bedrag is opgebracht voor de actie.
        </Paragraph>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={actions}
          renderItem={(action) => {
            const progressLogo = action.progress >= action.target ? <CheckCircleOutlined /> : <EuroCircleOutlined />;

            return (
              <a href={`./acties/${action.id}`}>
                <List.Item
                  key={action.id}
                  actions={[
                    <Space>
                      {progressLogo}
                      <Statistic
                        value={action.progress}
                        prefix="€"
                        suffix={`/ ${action.target}`}
                      />
                    </Space>
                  ]}
                  extra={
                    <img
                      height={200}
                      src={`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/actions/${action.imageUrl}`}
                    />
                  }
                >
                  <List.Item.Meta
                    title={action.title}
                  />
                  {action.description}
                </List.Item>
              </a>
            );
          }}
        />
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<{ props: ActionsPageProps }> {
  let actions: Action[];

  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_NODE}/actions`)
    .then((res) => res.json())
    .then((json) => { actions = json; });

  return { props: { actions } };
}

export default ActionsPage;
