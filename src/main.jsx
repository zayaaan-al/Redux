import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import  UserReducer  from './UserRedux.jsx'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer :{
    users:UserReducer
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
    
  </StrictMode>,
)
