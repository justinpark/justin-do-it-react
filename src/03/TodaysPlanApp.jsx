import React from 'react';
import TodaysPlan from './03/TodaysPlan';

export default class TodaysPlanApp extends React.Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
     <div className="body">
       {hasPlan ? <TodaysPlan /> : null}
       <button onClick={onButtonClick}>
         계획없음
       </button>
     </div>
    );
  }
}
