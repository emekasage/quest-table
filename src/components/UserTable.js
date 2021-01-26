import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  {
    field: 'created',
    headerName: 'Created',
    type: 'date',
    width: 100,
  },
  {
    field: 'reward',
    headerName: 'Reward',
    type: 'number',
    width: 90,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('type') || ''} ${params.getValue('title') || ''}`,
  },
];

const rows = [
  { id: 1, title: 'About you', type: 'Quiz', status: 'Draft', created: '11/02/2021; 1:20pm', reward: 75 },
  { id: 2, title: 'Lannister', type: 'Cersei', age: 42 },
  { id: 3, title: 'Lannister', type: 'Jaime', age: 45 },
  { id: 4, title: 'Stark', type: 'Arya', age: 16 },
  { id: 5, title: 'Targaryen', type: 'Daenerys', age: null },
  { id: 6, title: 'Melisandre', type: null, age: 150 },
  { id: 7, title: 'Clifford', type: 'Ferrara', age: 44 },
  { id: 8, title: 'Frances', type: 'Rossini', age: 36 },
  { id: 9, title: 'Roxie', type: 'Harvey', age: 65 },
];

export default function UserTable() {
  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
