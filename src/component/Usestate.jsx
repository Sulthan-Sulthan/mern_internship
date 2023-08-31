import React,{useState} from 'react'

export default function Usestate() {
    const [name,setName] = useState("faris")
    const handleName=()=>{
        setName("rahul")
    }
  return (
    <div>
        <h1 className = "App" style={{backgroundColor:"black",color:"white"}}>
            Usestate
    </h1>
    <h1>{name}</h1>
    <button onClick={handleName}>Change</button>
    <h2>{name}</h2>
    <input type='text' onChange={(e)} placeholder="enter your name"/>
    </div>
  )
}
