import React from 'react';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import withLoading from './withLoading';

function Page({ content }) {
  return (
    <div>
      페이지 로딩이 완료되었습니다.
      {content}
    </div>
  );
}

export const withLoadData = lifecycle({
  state: { isLoading: true, content: '' },
  componentDidMount: function() {
    if (this.props.loadData) {
      this.props.loadData().then(content => this.setState({ isLoading: false, content }));
    }
  },
});

export const PageWithLoadData = withLoadData(Page);
export const PageWithLoadDataAndLoading = compose(
  withLoadData,
  withLoading('서버 요청중'),
)(Page);
