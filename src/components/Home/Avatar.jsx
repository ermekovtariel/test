import React, { useState } from 'react';
import { Avatar, Badge, Select } from 'antd';
import { LogoMTeacher, btnDown, bell } from '../../assets';
import './Avatar.scss';

function AvatarComponent() {
  const { Option } = Select;
  const [yaer, setyaer] = useState('Акботой Керимов');
  function exit() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className='avatar_icons'>
      <div>
        <img src={btnDown} />
        <Badge dot={true}>
          <img src={bell} />
        </Badge>
        <p className='iconsAvatars'>|</p>
        <span className='button'>
          <Select
            className='name'
            onChange={() => {
              exit();
              setyaer();
            }}
            value={yaer}
          >
            <Option value='2'>Выйти</Option>
          </Select>
          <Avatar
            size={{
              lg: 64,
            }}
            icon={<img style={{ marginTop: '4px' }} src={LogoMTeacher} />}
          />
        </span>
      </div>
    </div>
  );
}

export default AvatarComponent;
