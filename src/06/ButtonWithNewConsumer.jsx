import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import LoadingProvider from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ label }) {
  return (
    <React.Fragment>
      <LoadingProvider>
        {({ loading, setLoading }) => (
          <Button onPress={() => setLoading('loading', !loading)}>
            {loading ? '로딩중' : label}
          </Button>
        )}
      </LoadingProvider>
      <LoadingProvider>
        {loading => (
          <Button onPress={() => loading.setLoading('loading2', !loading.loading2)}>
            {loading.loading2 ? '로딩중' : label}
          </Button>
        )}
      </LoadingProvider>
      <LoadingProvider>
        {({ loading, loading2 }) => (
          <Button>
            {loading && loading2 ? '로딩중' : label}
          </Button>
        )}
      </LoadingProvider>
    </React.Fragment>
  );
}

ButtonWithNewConsumer.propTypes = {
  label: PropTypes.string,
};

export default ButtonWithNewConsumer;
