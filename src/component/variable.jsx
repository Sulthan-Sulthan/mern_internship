import React from 'react'

export default function variable() {
    let  a = 40;
    a = 30;
    const b = 45;
    var name = "faris"
    
    if(true)
    {
       name = "kiran"
    }
    console.log(name)

  return (
    <div>
        <h1 style={{backgroundColor:"blue" , color:"white"}}>Variable</h1>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <p>{name}</p>
    </div>
  )
}
