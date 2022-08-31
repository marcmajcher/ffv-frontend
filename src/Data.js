import { useState } from 'react';
import useFetchAuth from './lib/useFetchAuth';
const ENDPOINT = 'http://localhost:3000';

export default function Data() {
  const [data, setData] = useState('');
  const fetchData = useFetchAuth(`${ENDPOINT}/me`,);

  function handleFetchData() {
    fetchData().then((json) => setData(JSON.stringify(json)));
  }

  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      <div>Data: {data}</div>
    </div>
  );
}
