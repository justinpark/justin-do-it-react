import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../../../doit-ui/Table';
import TableRow from '../../../doit-ui/TableRow';
import TableCell from '../../../doit-ui/TableCell';
import TableHead from '../../../doit-ui/TableHead';
import TableBody from '../../../doit-ui/TableBody';
import Text from '../../../doit-ui/Text';
import Spacing from '../../../doit-ui/Spacing';
import withLoading from '../../../05/withLoading';

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <Text large>데이터를 불러들이고 있습니다.</Text>
  </Spacing>
);
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
      datetime: PropTypes.string,
    }),
  ),
};

export default withLoading(LoadingMessage)(TransactionTable);
