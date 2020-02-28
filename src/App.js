import React from 'react';
import {useFetch} from './hook';
import './App.css';

function App() {
  const [data, loading] = useFetch(
    "http://localhost:3000/api/user"
  );
  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ _id, ten}) => (
            <li key={`photo-${_id}`}>
              {ten}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
