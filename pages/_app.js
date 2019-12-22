import React from 'react';
import App, { Container } from 'next/app';
import configureStore from '../src/08/store/configureStore';
import { Provider } from 'react-redux';
import ModalProvider from '../src/08/ModalProvider';
import AppLayout from '../src/08/components/AppLayout';
import NotificationContainer from '../src/08/containers/NotificationContainer';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RouterStateContainer from '../src/08/containers/RouterStateContainer';

const isServer = typeof window === 'undefined';

class MyApp extends App {
  store = configureStore();

  render() {
    const { Component, router, pageProps } = this.props;
    const Router = isServer ? StaticRouter : BrowserRouter;
    const routerProps = isServer ? { location: router.asPath } : {};

    return (
      <Container>
        <Provider store={this.store}>
          <Router {...routerProps}>
            <RouterStateContainer />
            <ModalProvider>
              <AppLayout>
                <Component {...pageProps} />
                <NotificationContainer />
              </AppLayout>
            </ModalProvider>
            <NotificationContainer />
          </Router>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
