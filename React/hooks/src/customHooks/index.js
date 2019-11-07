import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    try {
      await setLoader(true);
      await fetch(url)
        .then(res => res.json())
        .then(data => setNews(data.hits));
      await setLoader(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [news, loader];
}

// import { useState, useEffect } from "react";

// export default function useFetch() {
//   const [data, setData] = useState([]);
//   const [loader, setLoader] = useState(false);

//   const fetchData = async () => {
//     await setLoader(true);
//     await fetch("https://hn.algolia.com/api/v1/search?query=react-hooks").then(
//       res => res.json().then(data => setData(data.hits))
//     );
//     await setLoader(false);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return { data, loader };
// }
