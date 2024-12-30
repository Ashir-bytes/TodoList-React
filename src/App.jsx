import React from 'react'
import { useState } from 'react';

function App() {
  const [Name, setName] = useState("")
  const [number, setnumber] = useState("")
  const [Task, setTask] = useState([])
  const UserName = (e) => {
    let name = e.target.value
    // console.log(name);
    setName(name)
  };
  const UserMail = (e) => {
    let number = e.target.value
    // console.log(mail);
    setnumber(number)
  };
  const submithandler = (event) => {
    event.preventDefault();
    setTask = [...maintask , {Name, number}]
    // console.log(Name, number);
    console.log(Task);  
    setnumber('')
    setName('')

  }
  return (
    <>
      <h1 className="text-center text-9xl font-bold text-green-600">Todolist</h1>
      <form onSubmit={submithandler}
        className="flex flex-col w-full h-srceen justify-center items-center my-9">

        <input
          className="text-white text-center border-2 border-green-500 px-5 py-2 my-3 text-lg rounded-3xl w-1/2"
          type="text" placeholder="Enter Your Name"
          value={Name}
          onChange={UserName}
        />
        <input
          className="text-white text-center border-2 border-green-500 px-5 py-2 my-3 text-lg rounded-3xl w-1/2"
          type="number" placeholder="Enter Your Email"
          value={number}
          onChange={UserMail}
        />
        <button className='className="text-center text-white bg-emerald-900 px-9 py-2 my-3 text-lg rounded-3xl hover:bg-green-700 hover:scale-110 hover:transition ease-in-out delay-150"'>Add Number</button>

      </form>
    </>
  )
}

export default App