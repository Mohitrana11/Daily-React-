import { useState } from "react";

const data = [
  {
    country: "India",
    cities: ["Delhi", "Mumbai", "Dehradun"],
  },
  {
    country: "China",
    cities: ["Beijing", "Chongqing", "Shanghai"],
  },
  {
    country: "USA",
    cities: ["New york", "Los Angeles", "Chicago"]
  },
];

function App() {
  const [index, setIndex] = useState(0);
  // const [selectedCountry, setSelectedCountry] = useState(data[0].country);

  const handleIdx = (e) => {
    const selectedCountry = e.target.value;
    const idx = data.findIndex((country) => country.country === selectedCountry);
    setIndex(idx);
    // setSelectedCountry(selectedCountry);
  }

  return (
    <>
      <div className="w-full h-screen bg-blue-100 flex items-center justify-center">
        <div className="w-52 ">
          <select value={data[index].country} onChange={handleIdx}>
            {
              data.map((items, idx) => (
                <option key={idx} value={items.country}>{items.country}</option>
              ))
            }
          </select>
          <select className="ml-4">
            {
              data[index].cities.map((city, idx) => (
                <option key={idx} value={city}>{city}</option>
              ))
            }
          </select>
        </div>
      </div>
    </>
  );
}

export default App;