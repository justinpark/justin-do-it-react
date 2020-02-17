import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import { Consumer } from './LoadingProviderWithNewContext';

function ButtonWithNewConsumer({ label }) {
  return (
    <React.Fragment>
      <Consumer>
        {value => (
          <Button onPress={() => value.setLoading('loading', !value.loading)}>
            {value.loading ? '로딩중' : label}
          </Button>
        )}
      </Consumer>
      <Consumer>
        {({ loading2, setLoading }) => (
          <Button onPress={() => setLoading('loading2', !loading2)}>
            {loading2 ? '로딩중' : label}
          </Button>
        )}
      </Consumer>
      <Consumer>
        {({ loading, loading2 }) => <Button>{loading && loading2 ? '로딩중' : label}</Button>}
      </Consumer>
    </React.Fragment>
  );
}

ButtonWithNewConsumer.propTypes = {
  label: PropTypes.string,
};

export default ButtonWithNewConsumer;
