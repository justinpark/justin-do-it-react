import React, { PureComponent } from 'react';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';

const TableComponent = () => <ButtonWithLoadingContext label="버튼" />;

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;
