import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from './Spinner';
import { ErrorMessage } from './ErrorMessage';
import { useService } from './service';

import { setDecrement, setIncrement, setRandom, setReset } from '../store/actions';

import './App.css';

// В случае с connect:
// export const App = ({ count, setIncrement, setDecrement, setRandom, setReset }) => {

export const App = () => {

  // const [counter, setCounter] = useState(1);
  const [image, setImage] = useState(null);
  const [autoplay, setAutoplay] = useState(false);

  const { loading, error, clearError, getImage } = useService();

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // const [{ count }, dispatch] = useReducer(reducer, { count: 1 });

  const onImageLoaded = (image) => {
    setImage(image);
  };

  const loadImage = () => {
    clearError();
    getImage(count).then(onImageLoaded);
  };

  useEffect(() => {
    loadImage();
  }, [count]);

  // const increaseCounter = () => {
  //   setAutoplay(false);
  //   if (counter < 20) {
  //     setCounter((counter) => counter + 1);
  //   };
  // };

  // const decreaseCounter = () => {
  //   setAutoplay(false);
  //   if (counter > 1) {
  //     setCounter((counter) => counter - 1);
  //   };
  // };

  // const randomCounter = () => {
  //   setAutoplay(false);
  //   setCounter(+(Math.random(counter) * (20 - 1) + 1).toFixed(0));
  // };

  // const resetCounter = () => {
  //   setAutoplay(false);
  //   setCounter(1);
  // };

  const toggleAutoplay = () => {
    setAutoplay((autoplay) => !autoplay);
  }

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => dispatch(setIncrement()), 3000);

    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage />;
  if (image) {
    return (
      // В случае с connect:

      // <div className="app">
      //   <img src={image.thumbnailUrl} alt='placeholder-img' className='slide-img' />
      //   <div className="counter">{count}</div>
      //   <div className="controls">
      //     <button onClick={setDecrement}>-</button>
      //     <button onClick={setIncrement}>+</button>
      //     <button onClick={setRandom}>RND</button>
      //     <button onClick={setReset}>RESET</button>
      //     <button onClick={toggleAutoplay}>AUTOPLAY</button>
      //   </div>
      // </div>
      <div className="app">
        <img src={image.thumbnailUrl} alt='placeholder-img' className='slide-img' />
        <div className="counter">{count}</div>
        <div className="controls">
          <button onClick={() => dispatch(setDecrement())}>-</button>
          <button onClick={() => dispatch(setIncrement())}>+</button>
          <button onClick={() => dispatch(setRandom())}>RND</button>
          <button onClick={() => dispatch(setReset())}>RESET</button>
          <button onClick={toggleAutoplay}>AUTOPLAY</button>
        </div>
      </div>
    );
  };
};

// В случае с connect:

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(App);

// export default Container;

// ----------------------------------------------------------------------------

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