import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

function ButtonWithConsumer({ label }) {
  return (
    <React.Fragment>
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '로딩중' : label}
          </Button>
        )}
      />
      <Loading2Consumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '로딩중' : label}
          </Button>
        )}
      />
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Loading2Consumer
            render={({ loading: loading2 }) => (
              <Button onPress={() => setLoading(!loading)}>
                {loading && loading2 ? '로딩중' : label}
              </Button>
            )}
          />
        )}
      />
    </React.Fragment>
  );
}

ButtonWithConsumer.propTypes = {
  label: PropTypes.string,
};

export default ButtonWithConsumer;
