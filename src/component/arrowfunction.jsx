import React from 'react'
    

export default function arrowfunction() {
    const Arrow=(name,age)=>{alert("this is alert message "+name +"   age:  "+age);}
    let name = "Faris";
    let age = 23
  return (
    <div>
        <h1 style={{backgroundColor:"red" , color:"white"}}>Arrow function</h1>
        <button onClick={()=>Arrow(name,age)}>alert</button>
    </div>
  )
}
