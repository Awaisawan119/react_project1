import React from'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// if we use function for render then we can do this in main.jsx file 
export function MyApp (){
  return(
    <>
      <h1>i can do anything</h1>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <> 
  <App />
  <MyApp />
  </>
   
  
)
