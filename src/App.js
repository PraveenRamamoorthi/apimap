
import React from 'react'
import axios from "axios"
import { useState ,useEffect} from 'react'
import Main from './Main';

function App() {
  const [data,userdata]=useState([]);
 

 useEffect(()=>{
  
  async function call(){
    let response=await axios.get("https://jsonplaceholder.typicode.com/users")
     userdata(response.data)
    

  }
  call()

 },[])
  return (
    <div>
      { <Main values={data} /> }
    </div>
  )
}

export default App
