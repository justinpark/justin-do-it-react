import React from 'react';
import Input from './Input';

class OrderForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.setValue = this.setValue.bind(this);
  }
  setValue(name, value) {
    this.setState({ [name]: value });
  }
  render() {
    return (
      <form>
       <h1>주문창</h1>
       <Input type="text" name="text" value={this.state.coin} label="코인코드" onChange={this.setValue}/>
       <Input type="text" name="price" value={this.state.price} label="주문금액" onChange={this.setValue}/>
       <Input type="text" name="number" value={this.state.amount} label="주문량" onChange={this.setValue}/>
      </form>
    );
  }
}
export default OrderForm;
