import { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: this.props.counter,
    }
  }

  increaseCounter = () => {
    if (this.state.counter < 10) {
      this.setState((state) => ({
        counter: state.counter + 1,
      }));
    };
  };

  decreaseCounter = () => {
    if (this.state.counter > -10) {
      this.setState((state) => ({
        counter: state.counter - 1,
      }));
    };
  };

  randomCounter = () => {
    this.setState({
      counter: +(Math.random(this.state.counter) * (10 - -10) + -10).toFixed(0),
    });
  };

  resetCounter = () => {
    this.setState({
      counter: this.props.counter,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={this.increaseCounter}>INC</button>
          <button onClick={this.decreaseCounter}>DEC</button>
          <button onClick={this.randomCounter}>RND</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    );
  }
}