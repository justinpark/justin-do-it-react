import React from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    // 상태 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };
    // 이후 콜백 함수를 다룰때 bind를 선언하는 부분에 대해 다룹니다
    this.handleData = this.handleData.bind(this);
    // 생성 후 4초 후에 handleData를 호출합니다.
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    // 상태 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    // this.state.loading 은 현재 true 입니다.
    // 이후 호출될 출력함수에서의 this.state.loading은 false입니다.
  }
  // 다음과 같이 setState함수를 사용할 수 있습니다.
  // handleData(data) {
  //   this.setState(function(prevState) {
  //     const newState = {
  //       loading : false,
  //       formData: data + prevState.formData,
  //     };
  //     return newState;
  //   });
  // }
  render() {
    return (
      <div>
        {/* 상태 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
