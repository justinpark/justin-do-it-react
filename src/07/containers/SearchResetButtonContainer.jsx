import { connect } from 'react-redux';
import { resetFilter } from '../actions/searchFilterActions';
import Button from '../../04/Button';

const mapStateToProps = state => {
  // 검색 입력 값이 없는 경우 버튼의 disabled를 true로 설정합니다.
  const disabled = Object.values(state.searchFilter).reduce(
    (result, value) => result && !value,
    true,
  );

  return {
    disabled,
  };
};

const mapDispatchToProps = {
  onPress: resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
