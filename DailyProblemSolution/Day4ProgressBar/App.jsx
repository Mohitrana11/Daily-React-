
import React, { useState } from 'react'
import Progress from './Progress'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center flex-col gap-5'>
        {show ? <Progress /> : ''}
        <button onClick={() => setShow(!show)}><input
  type="checkbox"
  className="toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
  defaultChecked /></button>
      </div>
    </>
  )
}

export default App