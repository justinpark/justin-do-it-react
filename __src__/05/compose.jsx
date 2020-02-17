import compose from 'recompose/compose';
import withLoading from './withLoading';
import { withLoadData } from './lifecycle';

function Component() {
  return '완료(컴포넌트 출력)';
}
const ComponentWithLoading = withLoading('로딩중')(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);

const withLoadDataAndLoading = compose(withLoadData, withLoading('로딩중'))
// 올바르지 못한 예: compose(withLoading('로딩중'), withLoadingData)
const ComponentWithLoadData = withLoadDataAndLoading(ComponentWithLoading);
// 혹은 compose(withLoadData, withLoading('로딩중'))(ComponentWithLoading);
