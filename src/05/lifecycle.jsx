import lifecycle from 'recompose/lifecycle';
import Counter from '../03/Counter';
import TodaysPlan from '../03/TodaysPlan';

export const withLoadData = lifecycle({
  state: { loading: true, count: 0 },
  componentDidMount: function() {
    if (this.props.loadData) {
      this.props.loadData().then((count) => this.setState({ loading: false, count }));
    }
  },
});

const CounterWithLoadData = withLoadData(Counter);
const TodaysPlanWithLoadData = withLoadData(TodaysPlan);

const ComponentWithLoadData = withLoadData(({ loading }) => loading ? '로딩중': '완료');
// <ComponentWithLoadData loadData={() => fetch('google.com')} />

