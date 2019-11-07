import React, { useState } from "react";
import "./Click.css";

const Click = () => {
  const [text, setText] = useState("React Hooks");

  const handleClick = () => {
    setText("Change text with hooks");
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Click;

// const Click = () => {
//   const [buttonText, setButtonText] = useState("Click me, please");
//   const handleClick = () => {
//     setButtonText("Thanks, been clicked!");
//   };
//   return <button onClick={handleClick}>{buttonText}</button>;
// };

// export default Click;

// class Click extends Component {
//   state = { buttonText: "Click me, please" };

//   handleClick = () => {
//     this.setState(() => {
//       return { buttonText: "Thanks, been clicked!" };
//     });
//   };

//   render() {
//     const { buttonText } = this.state;
//     return <button onClick={this.handleClick}>{buttonText}</button>;
//   }
// }

// export default Click;
