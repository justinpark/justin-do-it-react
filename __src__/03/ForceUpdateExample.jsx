import React from 'react';

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    // 상태 정의
    this.loading = true;
    this.formData = 'no data';
    // 이후 콜백 함수를 다룰때 bind를 선언하는 부분에 대해 다룹니다
    this.handleData = this.handleData.bind(this);
    // 생성 후 4초 후에 handleData를 호출합니다.
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    // 상태 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        {/* 상태 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
