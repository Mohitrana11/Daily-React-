import  { useEffect, useState } from 'react'
import toast ,  { Toaster } from 'react-hot-toast';
function Progress() {
const [bar,setBar] = useState(0);
useEffect(()=>{
    // console.log("setI")
    const interval= setInterval(()=>{
    setBar((prev)=>{
        if(prev>=100){
            clearInterval(interval)
            toast.success('Progress complited')
            return prev;
        }
        return prev+5;
    })
    },180)
    return ()=>{
        clearInterval(interval);
    }
},[])
  return (
    <div className='w-[270px] h-[20px] border border-black rounded-md relative overflow-hidden'>
        <Toaster position='top-center'></Toaster>
        <div style={{transform:`translateX(${bar-100}%)`}} className='bg-green-500 w-full h-full absolute  '></div>
      
    </div>
  )
}

export default Progress
