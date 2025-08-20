import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import './App.css'
import { Link } from 'react-router-dom'
import {deleteUser} from './UserRedux'


function Home() {
    const users = useSelector((state)=> state.users)
    console.log(users);

    const dispatch =useDispatch()

    const handleDelete = (id) =>{
      console.log(id);
      dispatch(deleteUser({id:id}))
      
    }
    
  return (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User List</h2>
        <Link to={'/add'}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white ">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50 transition" >
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 flex justify-center gap-2">
                <Link to={`/update/${user.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                  Edit
                </Link>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={()=>handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}
export default Home
