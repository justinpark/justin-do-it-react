import React, { PureComponent } from 'react';
import AppLayout from '../src/08/components/AppLayout';
import MainPage from '../src/08/components/main/MainPage';
import NotificationContainer from '../src/08/containers/NotificationContainer';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RouterStateContainer from '../src/08/containers/RouterStateContainer';

class IndexDocument extends PureComponent {
  render() {
    const { pathname } = this.props;
    const Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;

    return (
      <Router location={pathname}>
        <RouterStateContainer />
        <AppLayout>
          <MainPage />
          <NotificationContainer />
        </AppLayout>
      </Router>
    );
  }
}

export default IndexDocument;
