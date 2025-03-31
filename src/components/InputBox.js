import React from 'react'
import { useState } from 'react'

const InputBox = ({setTodo}) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className='flex gap-2  items-center justify-between'>
        <input 
        type='text'
        placeholder='Enter your todo'
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
        className='border-2 border-gray-400 px-2 py-1 flex-1 bg-transparent placeholder:text-sm placeholder:text-gray-400 rounded-lg focus:outline-0'/>
        <button
          onClick={()=>setTodo(inputValue)} 
        className="border rounded-4xl px-2 py-1 bg-green-700 cursor-pointer hover:transition-all duration-100 ease-in-out delay-200 hover:bg-sky-500 text-white">Add todo</button>
    </div>
  )
}

export default InputBox