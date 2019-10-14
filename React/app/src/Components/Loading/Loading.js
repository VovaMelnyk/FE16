import React from 'react';
import './Loading.css';

const Loading = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  } else if (timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={retry}>Retry</button>
      </div>
    );
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

export default Loading;
