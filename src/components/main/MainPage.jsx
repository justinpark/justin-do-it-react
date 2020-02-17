import React, { PureComponent } from 'react';

import Spacing from '../../doit-ui/Spacing';

import DemoActionsContainer from '../../containers/main/DemoActionsContainer';
import TransactionListContainer from '../../containers/main/TransactionListContainer';
import NotificationContainer from '../../containers/NotificationContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <Spacing vertical={2} horizontal={2}>
        <Spacing bottom={2}>
          <DemoActionsContainer />
        </Spacing>
        <TransactionListContainer />
        <NotificationContainer />
      </Spacing>
    );
  }
}

export default MainPage;
