import { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { ErrorMessage } from './ErrorMessage';
import './App.css';
import { useService } from './service';

export const App = () => {

  const [counter, setCounter] = useState(1);
  const [image, setImage] = useState(null);

  const { loading, error, clearError, getImage } = useService();

  const onImageLoaded = (image) => {
    setImage(image);
  };

  const loadImage = (counter) => {
    clearError();
    getImage(counter).then(onImageLoaded);
  };

  useEffect(() => {
    loadImage(counter);
  }, [counter]);

  const increaseCounter = () => {
    if (counter < 20) {
      setCounter((counter) => counter + 1);
    };
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((counter) => counter - 1);
    };
  };

  const randomCounter = () => {
    setCounter(+(Math.random(counter) * (20 - 1) + 1).toFixed(0));
  };

  const resetCounter = () => {
    setCounter(1);
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage />;
  if (image) {
    return (
      <div className="app">
        <img src={image.thumbnailUrl} alt='placeholder-img' className='slide-img' />
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={decreaseCounter}>DEC</button>
          <button onClick={increaseCounter}>INC</button>
          <button onClick={randomCounter}>RND</button>
          <button onClick={resetCounter}>RESET</button>
        </div>
      </div>
    );
  };
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