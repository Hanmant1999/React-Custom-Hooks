import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {useShare } from "./Custom Share Hook/useShare";

function App() {
  const data = {
    name :"Hanmant",
    surname:"Petekar",
    url : "http://localhost:5173/"
  };

  const {error,Sharedata} = useShare(data);
  return (
      <>
      <button type="Submit" onClick ={()=>{Sharedata()}} >Share</button>
      {(error.length >1)  && 
      <h1>{error}</h1>
    }
    </>
  )
  
}

export default App
