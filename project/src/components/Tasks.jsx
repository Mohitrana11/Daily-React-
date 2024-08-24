import React from 'react'
import { useTask } from '../context/TaskContext';
import { GrStatusGood } from "react-icons/gr";
import toast, { Toaster } from 'react-hot-toast';
import { MdCancel } from "react-icons/md";
function Tasks() {
    const { data, setData } = useTask();

    const handleCompleted = (id)=>{
        const newTodo = data.map((todo)=>{
            return {...todo};
        })
        newTodo.forEach((todo)=>{
            if(todo.id==id){
                todo.completed=!todo.completed;
            }
        })
        setData(newTodo);
    }
    const handleCancel = (id)=>{
        const filterData = data.filter((todo)=>{
            return todo.id !=id;
        })
        setData(filterData);
    }
  return (
    <>
      <div className='w-full h-full mt-5 '>
        {
            data.map((item,idx)=>(

            <div className='w-full h-full flex items-center justify-between flex-row mt-5  text-3xl' key={idx}>
            {item.completed?(
                <p className='line-through line-bold  text-gray-600'>{item.task}</p>
            ):(
                <p>{item.task}</p>
            )

            }
            <div  >
            <button className='btn mr-5' onClick={()=>handleCompleted(item.id)}> {<GrStatusGood /> }</button>
            <button className='btn' onClick={()=>handleCancel(item.id)}> {<MdCancel />}</button>
            </div>
        </div>
            ))
        }
        
      </div>
    </>
  )
}

export default Tasks
