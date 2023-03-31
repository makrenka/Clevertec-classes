import { Component, useState } from 'react';
import './App.css';

export const App = () => {

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    if (counter < 10) {
      setCounter((counter) => counter + 1);
    };
  };

  const decreaseCounter = () => {
    if (counter > -10) {
      setCounter((counter) => counter - 1);
    };
  };

  const randomCounter = () => {
    setCounter(+(Math.random(counter) * (10 - -10) + -10).toFixed(0));
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={increaseCounter}>INC</button>
        <button onClick={decreaseCounter}>DEC</button>
        <button onClick={randomCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
};

// export class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     }
//   }

//   increaseCounter = () => {
//     if (this.state.counter < 10) {
//       this.setState((state) => ({
//         counter: state.counter + 1,
//       }));
//     };
//   };

//   decreaseCounter = () => {
//     if (this.state.counter > -10) {
//       this.setState((state) => ({
//         counter: state.counter - 1,
//       }));
//     };
//   };

//   randomCounter = () => {
//     this.setState({
//       counter: +(Math.random(this.state.counter) * (10 - -10) + -10).toFixed(0),
//     });
//   };

//   resetCounter = () => {
//     this.setState({
//       counter: 0,
//     });
//   };

//   render() {
//     return (
//       <div className="app">
//         <div className="counter">{this.state.counter}</div>
//         <div className="controls">
//           <button onClick={this.increaseCounter}>INC</button>
//           <button onClick={this.decreaseCounter}>DEC</button>
//           <button onClick={this.randomCounter}>RND</button>
//           <button onClick={this.resetCounter}>RESET</button>
//         </div>
//       </div>
//     );
//   }
// }