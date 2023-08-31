import React from 'react'

export default function Array() {
    
    var num = [1,2,3,4,5]
    var fruits = ["apple","banana","orange"]
    
        const students=[{
        name:"razeen",
        phone:9865764,
        email:"razeenmanchi@gmail.com",
        address:"manchi",
        marks:{
                maths : 90,
                hindi : 34,
                science : 67,
                english : 34,
                social : 45
        }
    },
    {
    name:"ramzeen",
    phone:659865764,
    email:"ramzeenramzi@gmail.com",
    address:"kalleri",
     marks:{
                maths : '',
                hindi : 34,
                science : 67,
                english : 34,
                social : 45
        }
    }]
    
    
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
                    <tr key={a}>
                        <td>{++a}</td>
                        <td>{item}</td>
                    </tr>
                )
            })}

    </table>
    <table border={1}>
      <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Address</th>
      <th>maths</th>
      </tr>
      {students.map((student)=>(
          <tr>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
          </tr>
      ))
      }
      </table>
    </div>
  )
}
