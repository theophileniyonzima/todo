'use client'

import InputBox from "@/components/InputBox";
import ListTodos from "@/components/ListTodos";
import { useState } from "react";

function Home() {
  const [todo, setTodo] = useState('')
  return (
    <section className='h-screen w-full space-y-4 py-5 mx-auto px-10 max-w-4xl'>
      <InputBox setTodo={setTodo}/>
      <ListTodos todos={todo}/>
    </section>
  );
}

export default Home