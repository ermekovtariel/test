import React from 'react';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import 'antd/dist/antd.css';

import Avatar from './Avatar';
import './Header.scss';

function Header(setVisible) {
  const showDrawer = setVisible.setVisible;

  return (
    <div className='header'>
      <header>
        <div
          className='menu'
          onClick={() => {
            showDrawer(true);
          }}
        >
          <MenuOutlined />
          <span className='menu_title'>МЕНЮ</span>
        </div>
        <Input
          className='input'
          placeholder='Поиск'
          suffix={<SearchOutlined />}
        />
        <Avatar className='rightAvatar' />
      </header>
    </div>
  );
}

export default Header;
