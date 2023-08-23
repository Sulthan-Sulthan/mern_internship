import React from 'react'

export default function test() {
    const Arrow=(name,age)=>{alert(`My  name is ${name} and my age ${age}`);}
  return (
    <div><h1 style={{backgroundColor:"blue" , color:"white"}}>Arrow function in test</h1>
        <button onClick={()=>Arrow("john" ,14)} >CLICK</button>
    </div>
  )
}
