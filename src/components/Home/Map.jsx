import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './Map.scss';

function Map({ data }) {
  const dates = data?.banks?.map((item, idx) => ({
    key: idx,
    id: item.id,
    amount: item.amount,
    bankId: item.bankId,
    bankTitle: item.bankTitle,
    button: (
      <Button key={(item, idx)} onClick={() => console.log(item.id)}>
        <DeleteOutlined />
      </Button>
    ),
  }));

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Название Банка',
      dataIndex: 'bankTitle',
      key: 'bankTitle',
    },
    {
      title: 'ID Банка',
      dataIndex: 'bankId',
      key: 'bankId',
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Транзакция',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Действие',
      dataIndex: 'button',
      key: `id`,
    },
  ];

  return (
    <div className='map'>
      <Table dataSource={dates} columns={columns} />;
    </div>
  );
}

export default Map;
