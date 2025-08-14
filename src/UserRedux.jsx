import {createSlice} from '@reduxjs/toolkit'
import {userList}from './Data.jsx'
import Update from './assets/components/Update.jsx';

const userSlice = createSlice({
    name : 'users',
    initialState: userList,
    reducers :{
        addUser:(state,action) =>{
            console.log(action);
            state.push(action.payload)
            
        },
        UpdateUser:(state,action)=>{
            const {id,name,email} =action.payload
            const uu = state.find(user => user.id==id)

            if(uu){
                uu.name = name;
                uu.email = email;
            }
        }
    }
})
export const{addUser,UpdateUser}=userSlice.actions

export default userSlice.reducer