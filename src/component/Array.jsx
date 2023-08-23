import React from 'react'

export default function Array() {
    
    var num = [1,2,3,4,5]
    var fruits = ["apple","banana","orange"]
    
    
    
    //console.log(num)
    //console.log(fruits)
  return (
    <div>
    <h1 className = "App" style={{backgroundColor:"black",color:"white"}}>
            Array
    </h1>
    <h1>{num}</h1>
    <h1>{fruits}</h1>
    
    <ol>
    
        {fruits.map((item)=>{
        
            return <h3><li>{item}</li></h3>
        })}
    
    </ol>
    <table border={3}>
        <tr >
            <td>sl_no.</td>
            <td>Fruits name</td>
        </tr>
        
            {fruits.map((item,a)=>{
                return(
                    <tr>
                        <td>{++a}</td>
                        <td>{item}</td>
                    </tr>
                )
            })}

    </table>
    </div>
  )
}
