import React, { useState } from "react";
import useFetch from "../../customHooks";
import "./Fetch.css";

const Fetch = () => {
  const [data, loader] = useFetch(
    "https://hn.algolia.com/api/v1/search?query=react-hooks"
  );
  return (
    <ul>
      {loader ? (
        <p>Loading...</p>
      ) : (
        data.map(el => (
          <li key={el.objectID}>
            <a href={el.url} target="_blank">
              {el.title}
            </a>
          </li>
        ))
      )}
      {/* {error ? (
        <p>{error}</p>
      ) : loader ? (
        <p>Loading...</p>
      ) : (
        news.map(el => (
          <li key={el.objectID}>
            <a href={el.url} target="_blank">
              {el.title}
            </a>
          </li>
        ))
      )} */}
    </ul>
  );
};
export default Fetch;

// const Fetch = props => {
//   // const [data, setData] = useState([]);
//   // const [loader, setLoader] = useState(false);
//   // const fetchData = async () => {
//   //   await setLoader(true);
//   //   await fetch("https://hn.algolia.com/api/v1/search?query=react-hooks").then(
//   //     res => res.json().then(data => setData(data.hits))
//   //   );
//   //   await setLoader(false);
//   // };
//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   const { data, loader } = useFetch();

//   return (
//     <ul classList="news">
//       {/* {data.map(el => (
//         <li classList="news__item" key={el.objectID}>
//           <a href={el.url} target="_blank">
//             {el.title}
//           </a>
//         </li>
//       ))} */}
//       {loader ? (
//         <p>Loading...</p>
//       ) : (
//         data.map(el => (
//           <li classList="news__item" key={el.objectID}>
//             <a href={el.url} target="_blank">
//               {el.title}
//             </a>
//           </li>
//         ))
//       )}
//     </ul>
//   );
// };

// export default Fetch;
