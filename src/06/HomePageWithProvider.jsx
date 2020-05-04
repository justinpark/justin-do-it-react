import React, { PureComponent } from 'react';
import LoadingProvider from './LoadingProvider';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import Button from '../04/Button';

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext label="버튼" />;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}
class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext label="상태 변경" />
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;
