import React, { PureComponent } from 'react';
import LoadingProviderWithKey from './LoadingProviderWithKey';
import {
  ButtonWithDefaultLoadingContext,
  ButtonWithLoading2Context,
} from './ButtonWithLoadingContextAndKey';

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey('loading2');
function TableComponent() {
  return (
    <table>
      <ButtonWithDefaultLoadingContext>컨텍스트1</ButtonWithDefaultLoadingContext>
      <ButtonWithLoading2Context>컨텍스트2</ButtonWithLoading2Context>
    </table>
  );
}

class HomePageComponentWithTwoProvider extends PureComponent {
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

export default HomePageComponentWithTwoProvider;
