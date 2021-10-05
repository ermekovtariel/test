import React from 'react';
import { Avatar, Badge } from 'antd';
import { LogoMTeacher, btnDown, vector, bell } from '../../assets';
import './Avatar.scss';

function AvatarComponent() {
  return (
    <div className='avatar_icons'>
      <div>
        <img src={btnDown} />
        <Badge dot={true}>
          <img src={bell} />
        </Badge>
        <p className='iconsAvatars'>|</p>
        <p className='name'>
          Акботой Керимов
          <img src={vector} />
        </p>
        <Avatar
          size={{
            lg: 64,
          }}
          icon={<img style={{ marginTop: '4px' }} src={LogoMTeacher} />}
        />
      </div>
    </div>
  );
}

export default AvatarComponent;
