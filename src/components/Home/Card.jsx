import React from 'react';
import { Progress } from 'antd';

import './Card.scss';
import { LogoM, LogoW, LogoMTeacher, LogoWTeacher } from '../../assets';

function Card(date) {
  const users = date.date?.map((item, idx) => (
    <div key={(item, idx)} className='flex'>
      <Progress strokeLinecap='square' type='circle' percent={item.persent} />
      <div
        style={{
          display: 'grid',
          paddingTop: '8px',
          paddingBottom: '8px',
          margin: '8px ​0rem',
        }}
      >
        <p className='itemCount'>{item.count}</p>
        <p className='itemTitle'>{item.title}</p>
      </div>
      <div style={{ display: 'grid' }}>
        {item.title == 'Мужчины' && (
          <img
            style={{
              paddingTop: '12px',
              width: '72px',
            }}
            src={LogoM}
          />
        )}
        {item.title == 'Женщины' && (
          <img
            style={{
              paddingTop: '12px',
              width: '72px',
            }}
            src={LogoW}
          />
        )}
        {item.title == 'Сотрудников - М' && (
          <img
            style={{
              paddingTop: '12px',
              width: '72px',
            }}
            src={LogoMTeacher}
          />
        )}
        {item.title == 'Сотрудников - Ж' && (
          <img
            style={{
              paddingTop: '12px',
              width: '72px',
            }}
            src={LogoWTeacher}
          />
        )}
      </div>
    </div>
  ));

  return (
    <div style={{ color: '#FFF', display: 'flex', margin: '0 38px' }}>
      {users}
    </div>
  );
}

export default Card;
