import { useState, useEffect } from 'react';
import './App.css';

const STATE = {
  LOADING: 'LOADING DATA.......',
  ERROR: 'OPES.. SOME ERROR OCCURS....',
  SUCCESS: 'SUCCESS'
};

function App() {
  const [query, setQuery] = useState('');
  const [searchData, setSearch] = useState([]);
  const [status, setStatus] = useState(STATE.LOADING);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATE.LOADING);
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`);
        const data = await res.json();
        setSearch(data.products);
        setStatus(STATE.SUCCESS);
      } catch (error) {
        console.error(error);
        setStatus(STATE.ERROR);
      }
    };

    const timeoutId = setTimeout(fetchData, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <>
      {/* Search box  */}
      <div className="box">
        <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        {status === STATE.LOADING && <div>Loading........</div>}
        {status === STATE.ERROR && <div>Error........</div>}
        {status === STATE.SUCCESS &&
          <ul>
            {searchData.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        }
      </div>
    </>
  );
}

export default App;