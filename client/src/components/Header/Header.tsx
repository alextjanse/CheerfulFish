import React from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';

function Header() {
  return (
    <Layout.Header style={{ position: 'fixed', width: '100%' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ width: '100%' }}
      >
        <Menu.Item key="0">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link href="/acties">
            <a>Acties</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/veiling">
            <a>Veiling</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/sponsor">
            <a>Sponsoracties</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/over-ons">
            <a>Over ons</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}

export default Header;
