import React, { PureComponent } from 'react';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProviderWithKey from './LoadingProviderWithKey';

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey('loading2');
const TableComponent = () => <ButtonWithLoadingContext label="버튼" />;

class HomePageComponentWithTwoProvider  extends PureComponent {
  render() {
    return (
      <LoadingProvider1>
        <LoadingProvider2>
          <TableComponent />
        </LoadingProvider2>
      </LoadingProvider1>
    );
  }
}

export default HomePageComponentWithTwoProvider ;
