import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <div id="counter-app">
      <div id="display-container" className="container">
        <p id="display">{counter}</p>
      </div>
      <div id="buttons-container" className="container">
        <button
          id="increment-button"
          className="button"
          type="button"
          onClick={increment}
        >
          <i className="fa fa-plus" />
        </button>
        <button
          id="decrement-button"
          className="button"
          type="button"
          onClick={decrement}
        >
          <i className="fa fa-minus" />
        </button>
        <button
          id="reset-button"
          className="button"
          type="button"
          onClick={reset}
        >
          <i className="fa fa-refresh" />
        </button>
      </div>
    </div>
  );
};

// class Counter extends React.Component {
//   state = {
//     counter: 0
//   };

//   increment = () => {
//     this.setState(prev => ({
//       counter: prev.counter + 1
//     }));
//   };

//   decrement = () => {
//     this.setState(prev => ({
//       counter: prev.counter - 1
//     }));
//   };

//   reset = () => {
//     this.setState({
//       counter: 0
//     });
//   };

//   render() {
//     const { counter } = this.state;
//     return (
//       <div id="counter-app">
//         <div id="display-container" className="container">
//           <p id="display">{counter}</p>
//         </div>
//         <div id="buttons-container" className="container">
//           <button
//             id="increment-button"
//             className="button"
//             type="button"
//             onClick={this.increment}
//           >
//             <i className="fa fa-plus" />
//           </button>
//           <button
//             id="decrement-button"
//             className="button"
//             type="button"
//             onClick={this.decrement}
//           >
//             <i className="fa fa-minus" />
//           </button>
//           <button
//             id="reset-button"
//             className="button"
//             type="button"
//             onClick={this.reset}
//           >
//             <i className="fa fa-refresh" />
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

export default Counter;

// import React, { useState } from "react";
// import "./Counter.css";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   const decrement = () => {
//     setCounter(counter - 1);
//   };

//   const reset = () => {
//     setCounter(0);
//   };
//   return (
// <div id="counter-app">
//   <div id="display-container" className="container">
//     <p id="display">{counter}</p>
//   </div>
//   <div id="buttons-container" className="container">
//     <button
//       id="increment-button"
//       className="button"
//       type="button"
//       onClick={increment}
//     >
//       <i className="fa fa-plus" />
//     </button>
//     <button
//       id="decrement-button"
//       className="button"
//       type="button"
//       onClick={decrement}
//     >
//       <i className="fa fa-minus" />
//     </button>
//     <button
//       id="reset-button"
//       className="button"
//       type="button"
//       onClick={reset}
//     >
//       <i className="fa fa-refresh" />
//     </button>
//   </div>
// </div>
//   );
// };

// export default Counter;
