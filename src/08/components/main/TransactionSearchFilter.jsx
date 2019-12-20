import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import InlineList from '../../../doit-ui/InlineList';
import Button from '../../../doit-ui/Button';
import Text from '../../../doit-ui/Text';
import Input from '../../../doit-ui/Input';
import Form from '../../../doit-ui/Form';
import Select, { Option } from '../../../doit-ui/Select';

// import Api from '../../Api';

class TransactionSearchFilter extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    // const { requestTransactionList, setFilter } = this.props;
    const { setFilter, history } = this.props;
    const cleanedParams = Object.entries(params)
      .filter(entries => entries[1] !== '')
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    // requestTransactionList(cleanedParams);
    // setFilter(cleanedParams);
    const querystring = Object.entries(params)
      .filter(entries => !!entries[1])
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    history.push(`/?${querystring}`);

    // Api.get('/transactions', { params })
    //   .then(({ data }) => setTransactionList(data));
  }
  render() {
    const { initValues } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} initValues={initValues}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select name="code" label="코인 코드" onChange={onChange} value={values['code']}>
                <Option label="선택해주세요" value="" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="두잇코인(DOIT)" value="DOIT" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소 거래가"
                onChange={onChange}
                value={values['currentPrice_gte']}
              />
              <Input
                name="currentPrice_lte"
                label="최대 거래가"
                onChange={onChange}
                value={values['currentPrice_lte']}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

TransactionSearchFilter.propTypes = { setFilter: PropTypes.func };

export default withRouter(TransactionSearchFilter);
