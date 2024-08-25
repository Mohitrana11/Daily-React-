// import React from 'react'

import useCount from "./useCount"

function App() {
  const {count,increment,decrement} =useCount();
  return (
    <>
      <div className="w-full h-full m-40 ml-80  ">
        <h1 className="ml-14 text-xl m-4">{count}</h1>
        <button className="btn mr-10 hover:bg-blue-200 duration-100" onClick={increment}>{"+"}</button>
        <button className="btn hover:bg-blue-200 duration-100" onClick={decrement}>{"-"}</button>
      </div>
    </>
  )
}

export default App
