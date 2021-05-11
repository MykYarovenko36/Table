import React from 'react';
import TableProvider from '../../context';
import Table from '../table';
import '../../common/normalize.css';
import './app.module.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <TableProvider>
        <Table />
    </TableProvider>
  )
};

export default App;