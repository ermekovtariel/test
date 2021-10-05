import React from 'react';
import { Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import './Map.scss';
import { deleteBankById } from '../../store/actions/bankAction';

function Map({ data }) {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteBankById(id));
  }

  const dates = data?.map((item, idx) => ({
    key: idx,
    id: item.id,
    amount: `${item.amount} сом`,
    bankId: item.bankId,
    bankTitle: item.bankTitle,
    button: (
      <Button
        style={{
          background: '#181c28',
          color: 'rgb(120, 130, 162)',
          border: 'none',
        }}
        key={(item, idx)}
        onClick={() => handleDelete(item.id)}
      >
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
