import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onIncreaseBy = diff => {
    this.setState({ count: this.state.count + diff });
  };

  render() {
    return (
      <div className="Counter">
        <span>카운트</span>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.onIncrease()}>+1 increase</button>
        <button onClick={() => this.onDecrease()}>-1 decrease</button>
        <button onClick={() => this.onIncreaseBy(5)}>+5 increase</button>
      </div>
    );
  }
}

export default Counter;
