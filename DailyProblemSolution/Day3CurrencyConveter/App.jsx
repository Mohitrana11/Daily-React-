import { useEffect, useState } from 'react';
import './App.css';
import countryList from './contry';

function App() {
  const [fromCountry, setFromCountry] = useState('USD');
  const [toCountry, setToCountry] = useState('INR');
  const [inputValue, setInput] = useState(1);
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    const apiKey = '47970c41a517e84ee7f1c08c';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCountry}`;
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setRate(data.conversion_rates[toCountry]);
    };
    const items = setTimeout(fetchData,500);
    return ()=>{
      clearInterval(items);
    }
  }, [fromCountry, toCountry]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const total = rate * inputValue;
    setResult(total);
  };

  return (
    <>
      <div id="main">
        <div className="container">
          <h2>Currency Converter</h2>
          <form action="#" onSubmit={handleSubmit}>
            <div className="amount">
              <p>Enter Amount</p>
              <input type="text" value={inputValue} id="inp-1" onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="dropdown">
              <div className="from">
                <p>From</p>
                <div className="select-container">
                  <img src={`https://flagsapi.com/${fromCountry}/flat/64.png`} />
                  <select name="from" id="" value={fromCountry} onChange={(e) => setFromCountry(e.target.value)}>
                    {Object.keys(countryList).map((country, idx) => (
                      <option key={idx} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
              <div className="to">
                <p>to</p>
                <div className="select-container">
                  <img src={`https://flagsapi.com/${toCountry}/flat/64.png`} />
                  <select name="to" id="" value={toCountry} onChange={(e) => setToCountry(e.target.value)}>
                    {Object.keys(countryList).map((country, idx) => (
                      <option key={idx} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="msg"> {inputValue}{fromCountry} = {result} {toCountry}</div>
            <button>Get Exchange Rate</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;