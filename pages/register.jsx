import React, { PureComponent } from 'react';
import AppLayout from '../src/08/components/AppLayout';
import RegisterPageContainer from '../src/08/containers/signup/RegisterPageContainer';
import NotificationContainer from '../src/08/containers/NotificationContainer';

class RegisterDocument extends PureComponent {
  render() {
    return (
      <AppLayout>
        <RegisterPageContainer />
        <NotificationContainer />
      </AppLayout>
    );
  }
}

export default RegisterDocument;
