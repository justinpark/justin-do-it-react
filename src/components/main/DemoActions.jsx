import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

import Button from '../../doit-ui/Button';
import InlineList from '../../doit-ui/InlineList';

const propTypes = forbidExtraProps({});

const defaultProps = {};

function DemoActions({ showMessage, hideMessage, setTransactionList, requestTransactionList }) {
  return (
    <InlineList>
      <Button onPress={() => requestTransactionList({ _page: 1, _limit: 10 })}>API 요청</Button>
      <Button onPress={() => setTransactionList([])}>초기화</Button>
      <Button onPress={() => showMessage('알림 표시 데모')}>Notification 표시</Button>
      <Button onPress={() => hideMessage()}>표시 감춤</Button>
    </InlineList>
  );
}

DemoActions.propTypes = propTypes;
DemoActions.defaultProps = defaultProps;

export default DemoActions;
