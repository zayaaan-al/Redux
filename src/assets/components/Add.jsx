import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from '../../UserRedux';
import { useNavigate } from 'react-router-dom';


const Add = () => {

    const [name,setName] = useState("")
    const[email,setEmail] = useState("")
    const users = useSelector((state) => state.users)
    // console.log(users);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit =(event) =>{
        event.preventDefault()
        dispatch(addUser({id :users[users.length -1].id+1,name,email}))
        navigate('/')
        alert('Added Successfully')
    }
    
  return (
    
   <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto space-y-4 mt-10">
    <form onSubmit={handleSubmit}>
  <div className="flex flex-col">
    <label className="mb-1 font-semibold text-gray-700">Name:</label>
    <input
      type="text"
      onChange={e=>setName(e.target.value)}
      placeholder="Enter your name"
      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="flex flex-col">
    <label className="mb-1 font-semibold text-gray-700">Email:</label>
    <input
      type="email" 
      onChange={e=>setEmail(e.target.value)}
      placeholder="Enter your email"
      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <button 
    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
  >
    Submit
  </button>
  </form>
</div>

  );
}

export default Add;
