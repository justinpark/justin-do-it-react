import { connect } from 'react-redux';
import SearchResultTable from '../SearchResultTable';

const mapStateToProps = state => {
  const { collection, searchFilter } = state;
  const hasFilter = Object.values(searchFilter).reduce((result, value) => result || Boolean(value), false);
  const { ids, entities } = collection;
  const items = ids
    .map(id => entities[id])
    .filter(
      entity =>
        !hasFilter ||
        Object.entries(searchFilter).reduce(
          (result, [key, value]) => result && (!value || `${entity[key]}` === `${value}`),
          true,
        ),
    );

  return { items };
};

export default connect(mapStateToProps)(SearchResultTable);
