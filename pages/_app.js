import React from 'react';
import App, { Container } from 'next/app';
import configureStore from '../src/08/store/configureStore';
import { Provider } from 'react-redux';
import ModalProvider from '../src/08/ModalProvider';

class MyApp extends App {
  store = configureStore();
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={this.store}>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
