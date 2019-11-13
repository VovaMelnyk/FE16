import React, { Component, useState, useRef, useEffect } from "react";
import Item from "../Item";
import "./Refs.css";

const Refs = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const messageRef = useRef(null);
  const inputRef = useRef(null);
  const changeInput = ({ target }) => {
    const text = target.value;
    setInputValue(text);
  };
  const addItem = () => {
    const item = {
      id: Date.now(),
      text: inputValue
    };
    setList([...list, item]);
    setInputValue("");
  };

  const scrollBottom = () => {
    const scrollH = messageRef.current.scrollHeight;
    const clientH = messageRef.current.clientHeight;
    const scrollValue = scrollH - clientH;
    messageRef.current.scrollTop = scrollValue;
  };

  const deleteItem = id => {
    const newList = list.filter(el => el.id !== id);
    setList(newList);
  };

  const inputFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    scrollBottom();
    inputFocus();
  }, [list]);

  return (
    <div>
      <div className="container" ref={messageRef}>
        {list.map(el => (
          <Item {...el} deleteItem={deleteItem} key={el.id} />
        ))}
      </div>
      <div className="footer">
        <input
          type="text"
          className="text"
          value={inputValue}
          onChange={changeInput}
          ref={inputRef}
        />
        <button className="send" onClick={addItem}>
          Send
        </button>
      </div>
    </div>
  );
};
export default Refs;

// class Refs extends Component {
//   constructor() {
//     super();
//     this.myRef = React.createRef();

//     this.state = {
//       users: [
//         {
//           name: "Leanne Graham"
//         },
//         {
//           name: "Ervin Howell"
//         },
//         {
//           name: "Clementine Bauch"
//         },
//         {
//           name: "Patricia Lebsack"
//         },
//         {
//           name: "Chelsey Dietrich"
//         },
//         {
//           name: "Mrs. Dennis Schulist"
//         },
//         {
//           name: "Kurtis Weissnat"
//         },
//         {
//           name: "Nicholas Runolfsdottir V"
//         },
//         {
//           name: "Glenna Reichert"
//         },
//         {
//           name: "Clementina DuBuque"
//         },
//         {
//           name: "Bottom"
//         }
//       ]
//     };
//   }
//   componentDidMount() {
//     this.scrollBottom();
//     // console.log(this.myRef.current);
//   }

//   scrollBottom = () => {
//     const scrollH = this.myRef.current.scrollHeight;
//     const clientH = this.myRef.current.clientHeight;
//     const scrollValue = scrollH - clientH;
//     this.myRef.current.scrollTop = scrollValue;
//     // console.log(this.myRef.current);
//     // const scrollPos = this.myRef.current.scrollTop;
//     // const scrollBottom =
//     //   this.myRef.current.scrollHeight - this.myRef.current.clientHeight;
//     // // console.log(scrollPos);
//     // // console.log(scrollBottom);
//     // // console.log("sh", this.myRef.current.scrollHeight);
//     // // console.log("ch", this.myRef.current.clientHeight);
//     // this.myRef.current.scrollTop = scrollBottom;
//   };

//   render() {
//     const { users } = this.state;
//     return (
//       <div ref={this.myRef} className="container">
//         {users.map(el => (
//           <p key={el.name}>{el.name}</p>
//         ))}
//       </div>
//     );
//   }
// }

// export default Refs;

{
  /* <div className="container" ref={this.myRef}>
        {users.map(el => (
          <p key={el.name}>{el.name}</p>
        ))}
      </div> */
}

// import React from 'react';

// const Refs = () => {
//   const [list, setList] = useState([
//     {
//       name: "Leanne Graham"
//     },
//     {
//       name: "Ervin Howell"
//     },
//     {
//       name: "Clementine Bauch"
//     },
//     {
//       name: "Patricia Lebsack"
//     },
//     {
//       name: "Chelsey Dietrich"
//     },
//     {
//       name: "Mrs. Dennis Schulist"
//     },
//     {
//       name: "Kurtis Weissnat"
//     },
//     {
//       name: "Nicholas Runolfsdottir V"
//     },
//     {
//       name: "Glenna Reichert"
//     },
//     {
//       name: "Clementina DuBuque"
//     },
//     {
//       name: "Bottom"
//     }
//   ]);
//   const myRef = useRef(null);
//   const scrollBottom = () => {
//     const scrollPos = myRef.current.scrollTop;
//     const scrollBottom =
//       myRef.current.scrollHeight - myRef.current.clientHeight;
//     myRef.current.scrollTop = scrollBottom;
//   };

//   useEffect(() => {
//     scrollBottom();
//   }, []);

//   return (
//     <div className="container" ref={myRef}>
//       {list.map(el => (
//         <p key={el.name}>{el.name}</p>
//       ))}
//     </div>
//   );
// };

// export default Refs;
