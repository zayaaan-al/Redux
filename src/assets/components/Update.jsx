import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { UpdateUser } from '../../UserRedux';
import { useNavigate ,useParams} from 'react-router-dom';

const Update = () => {

    const {id} =useParams()
    const users = useSelector((state)=>state.users)

    const extingUser = users.filter(f=>f.id==id)
    console.log(extingUser);

    const {name,email} =extingUser[0]

    const [uname , setName]=useState(name)
    const [uemail , setEmail] =useState(email)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (event)=>{
        event.preventDefault()
        dispatch(UpdateUser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate('/')
    }
    
  return (
    <div>
        <form onSubmit={handleUpdate}>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto space-y-4">
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
    Edit
  </button>
</div>
</form>

    </div>
  );
}

export default Update;
