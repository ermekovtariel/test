import React, { useState } from 'react';
import {
  HomeFilled,
  UserOutlined,
  SnippetsOutlined,
  FileProtectOutlined,
  DownloadOutlined,
  SlidersFilled,
  QuestionCircleFilled,
  MessageFilled,
} from '@ant-design/icons';
import { Progress, Drawer } from 'antd';

import { Header, CardOFGAys, Map } from '../../components/Home';
import '../Home/Home.scss';

function Home(props) {
  const [visible, setVisible] = useState(false);
  let allCount = 0;

  const name = [
    {
      persent: 90,
      count: 55147,
      title: 'Мужчины',
    },
    {
      persent: 32,
      count: 98571,
      title: 'Женщины',
    },
    {
      persent: 50,
      count: 1957,
      title: 'Сотрудников - М',
    },
    {
      persent: 50,
      count: 1957,
      title: 'Сотрудников - Ж',
    },
  ];

  const data = [
    { year: 'Ак-Суу', value: 5 },
    { year: 'Жети-Огуз', value: 4.5 },
    { year: 'Тон', value: 5 },
    { year: 'Тюп', value: 3.5 },
    { year: 'Каракол', value: 5 },
    { year: 'г.Балыкчы', value: 5 },
    { year: 'г.Чолпон-Ата', value: 4.2 },
  ];

  const all = data.map((item) => (allCount = allCount + item.value));

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='awdd'>
      <Header setVisible={setVisible} />
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
        <CardOFGAys date={name} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontSize: '48px',
            borderLeft: '1px solid #fff',
            paddingLeft: '50px',
          }}
        >
          ETB Bank
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gridGap: '10px',
          marginRight: '37px',
        }}
      >
        <Map data={props.data} />
        <div
          style={{
            display: 'grid',
            background: '#292d39',
            borderRadius: '4px',
            gridTemplateRows: '80px auto',
          }}
        >
          <div
            style={{
              borderBottom: '1px solid rgb(56, 61, 77)',
              height: 'fit-content',
              padding: '22px 0px 24px 28px',
              fontSize: '16px',
              fontWeight: 'bold',
              textAlign: 'left',
              color: 'rgb(255, 255, 255)',
            }}
          >
            ОБЩИЕ ПОКАЗАТЕЛИ
          </div>
          <div>
            <div style={{ margin: '0 12px', padding: '12px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50% 50%',
                  justifyContent: 'center',
                  padding: '0 18px',
                }}
              >
                <span style={{ textAlign: 'left', color: '#7882a2' }}>
                  Доход
                </span>
                <span style={{ textAlign: 'right', color: '#39b6ff' }}>
                  120,000
                </span>
              </div>
              <Progress
                style={{ borderRadius: '0', width: '398', float: 'left' }}
                strokeLinecap='square'
                percent={75}
              />
            </div>
            <div style={{ margin: '0 12px', padding: '12px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50% 50%',
                  justifyContent: 'center',
                  padding: '0 18px',
                }}
              >
                <span style={{ textAlign: 'left', color: '#7882a2' }}>
                  Доход
                </span>
                <span style={{ textAlign: 'right', color: '#39b6ff' }}>
                  120,000
                </span>
              </div>
              <Progress
                style={{ borderRadius: '0', width: '398', float: 'left' }}
                strokeLinecap='square'
                percent={75}
              />
            </div>
            <div style={{ margin: '0 12px', padding: '12px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50% 50%',
                  justifyContent: 'center',
                  padding: '0 18px',
                }}
              >
                <span style={{ textAlign: 'left', color: '#7882a2' }}>
                  Доход
                </span>
                <span style={{ textAlign: 'right', color: '#39b6ff' }}>
                  120,000
                </span>
              </div>
              <Progress
                style={{ borderRadius: '0', width: '398', float: 'left' }}
                strokeLinecap='square'
                percent={75}
              />
            </div>
            <div style={{ margin: '0 12px', padding: '12px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50% 50%',
                  justifyContent: 'center',
                  padding: '0 18px',
                }}
              >
                <span style={{ textAlign: 'left', color: '#7882a2' }}>
                  Доход
                </span>
                <span style={{ textAlign: 'right', color: '#39b6ff' }}>
                  120,000
                </span>
              </div>
              <Progress
                style={{ borderRadius: '0', width: '398', float: 'left' }}
                strokeLinecap='square'
                percent={75}
              />
            </div>
            <div style={{ margin: '0 12px', padding: '12px' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50% 50%',
                  justifyContent: 'center',
                  padding: '0 18px',
                }}
              >
                <span style={{ textAlign: 'left', color: '#7882a2' }}>
                  Доход
                </span>
                <span style={{ textAlign: 'right', color: '#39b6ff' }}>
                  120,000
                </span>
              </div>
              <Progress
                style={{ borderRadius: '0', width: '398', float: 'left' }}
                strokeLinecap='square'
                percent={75}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '60% 40%',
          gridGap: '2rem',
          marginLeft: '38px',
          marginTop: '1rem',
          marginRight: '37px',
        }}
      >
        <div style={{ background: '#292d39', borderRadius: '4px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto',
              padding: '19px 28px 17px 28px',
              borderBottom: '1px solid #383d4d',
            }}
          >
            <span
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              БАНК С ЛУЧШИМИ ПОКАЗАТЕЛЯМИ
            </span>
            <a
              style={{
                fontSize: '11px',
                textDecoration: 'underline',
                textAlign: 'right',
                paddingRight: '28px',
              }}
            >
              Смотреть все
            </a>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '33% 33% 33%',
              color: '#fff',
              padding: '8px 45px 8px 28px',
              borderBottom: '1px solid #383d4d',
            }}
          >
            <p style={{ textAlign: 'left', margin: '0' }}>Название</p>
            <p style={{ textAlign: 'center', margin: '0' }}>Средняя Прибыл</p>
            <p style={{ textAlign: 'right', margin: '0' }}>
              Посещаемость Работников
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '33% 33% 33%',
              color: '#7882a2',
              padding: '8px 55px 8px 28px',
              borderBottom: '1px solid #383d4d',
              fontSize: '12px',
              fontWeight: 'Roboto',
            }}
          >
            <p style={{ textAlign: 'left', margin: '0' }}>1. Каракол</p>
            <p style={{ textAlign: 'center', margin: '0' }}>81.56%</p>
            <p
              style={{ margin: '8px 0', textAlign: 'right', padding: '0 16%' }}
            >
              81.56%
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '33% 33% 33%',
              color: '#7882a2',
              padding: '8px 55px 8px 28px',
              borderBottom: '1px solid #383d4d',
              fontSize: '12px',
              fontWeight: 'Roboto',
            }}
          >
            <p style={{ textAlign: 'left', margin: '8px 0' }}>2. Каракол</p>
            <p style={{ textAlign: 'center', margin: '8px 0' }}>81.56%</p>
            <p
              style={{ margin: '8px 0', textAlign: 'right', padding: '0 16%' }}
            >
              81.56%
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '33% 33% 33%',
              color: '#7882a2',
              padding: '8px 55px 8px 28px',
              borderBottom: '1px solid #383d4d',
              fontSize: '12px',
              fontWeight: 'Roboto',
            }}
          >
            <p style={{ textAlign: 'left', margin: '8px 0' }}>3. Каракол</p>
            <p style={{ textAlign: 'center', margin: '8px 0' }}>81.56%</p>
            <p
              style={{ margin: '8px 0', textAlign: 'right', padding: '0 16%' }}
            >
              81.56%
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '33% 33% 33%',
              color: '#7882a2',
              padding: '8px 55px 8px 28px',
              fontSize: '12px',
              fontWeight: 'Roboto',
            }}
          >
            <p style={{ textAlign: 'left', margin: '8px 0' }}>4. Каракол</p>
            <p style={{ textAlign: 'center', margin: '8px 0' }}>81.56%</p>
            <p
              style={{ margin: '8px 0', textAlign: 'right', padding: '0 16%' }}
            >
              81.56%
            </p>
          </div>
        </div>
        <div
          style={{
            background: '#292d39',
            borderRadius: '4px',
            marginRight: '23px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto',
              padding: '19px 28px 17px 28px',
              borderBottom: '1px solid #383d4d',
            }}
          >
            <span
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              РАЙОНЫ С ЛУЧШИМИ ПОКАЗАТЕЛЯМИ
            </span>
            <a
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                textAlign: 'right',
                paddingRight: '28px',
                color: '#ee6262',
              }}
            >
              СРЕДНИЙ:{' '}
              {Math.round(parseFloat(allCount / data.length) * 100) / 100}
            </a>
          </div>
        </div>
      </div>
      <Drawer
        className='drawer'
        placement='left'
        size='large'
        onClose={onClose}
        visible={visible}
        style={!visible && { display: 'none' }}
        closable={false}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateRows: '72% 50%',
            color: '#7882a2',
          }}
        >
          <div
            style={{
              borderBottom: '1px solid #383d4d',
              marginTop: '36%',
              fontSize: '16px',
            }}
          >
            <p
              style={{
                display: 'grid',

                gridTemplateColumns: '50px 180px auto',

                height: '38px',

                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'none' }}>{all}</div>
              <HomeFilled />
              Главная
            </p>
            <p
              style={{
                display: 'grid',

                gridTemplateColumns: '50px 180px auto',

                height: '38px',

                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <UserOutlined />
              Контакты
            </p>
            <p
              style={{
                display: 'grid',

                gridTemplateColumns: '50px 180px auto',

                height: '38px',

                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <SnippetsOutlined />
              Отчеты
            </p>
            <p
              style={{
                display: 'grid',

                gridTemplateColumns: '50px 180px auto',

                height: '38px',

                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <FileProtectOutlined />
              Запросы
            </p>
            <p
              style={{
                display: 'grid',
                gridTemplateColumns: '50px 180px auto',

                height: '38px',

                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <DownloadOutlined />
              Входящие
              <div
                style={{
                  border: '1px solid #39b6ff',
                  borderRadius: '5rem',
                  width: 'fit-content',
                  padding: '0 .4rem',
                  background: '#39b6ff',
                  color: 'white',
                  fontSize: '12px',
                }}
              >
                5
              </div>
            </p>
          </div>
          <div style={{ fontSize: '15px', paddingTop: '5rem' }}>
            <p
              style={{
                display: 'grid',
                height: '38px',
                gridTemplateColumns: '50px auto',
                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <SlidersFilled />
              Настройки
            </p>
            <p
              style={{
                display: 'grid',
                height: '38px',
                gridTemplateColumns: '50px auto',
                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <QuestionCircleFilled />
              Помощь
            </p>
            <p
              style={{
                display: 'grid',
                height: '38px',
                gridTemplateColumns: '50px auto auto',
                gridGap: '1rem',
                alignItems: 'center',
              }}
            >
              <MessageFilled />
              <a>Написать :</a>
              <a>Эрмекову Тариелю</a>
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Home;
