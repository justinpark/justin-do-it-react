import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../../../doit-ui/Table';
import TableRow from '../../../doit-ui/TableRow';
import TableCell from '../../../doit-ui/TableCell';
import TableHead from '../../../doit-ui/TableHead';
import TableBody from '../../../doit-ui/TableBody';

class TransactionTable extends PureComponent {
  render() {
    const { transactions } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">코인</TableCell>
            <TableCell align="center">시가 총액</TableCell>
            <TableCell align="center">현재 시세</TableCell>
            <TableCell align="right">거래 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(({ id, name, totalPrice, currentPrice, datetime }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{totalPrice}</TableCell>
              <TableCell align="center">{currentPrice}</TableCell>
              <TableCell align="right">{datetime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      totalPrice: PropTypes.string,
      currentPrice: PropTypes.string,
      datetime: PropTypes.string
    })
  )
};

export default TransactionTable;
