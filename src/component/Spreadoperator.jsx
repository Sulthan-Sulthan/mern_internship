import React from 'react'

export default function Spreadoperator() {
    const num1 = [1,2,3,4]
    const num2 = [5,6,,7]
    const numberscombined = [...num1,...num2]
    const numbers = [1,2,3,4,5,6]
    const [one, two,...rest] = numbers

    const MyVehicle ={
        brand : "Ford",
        model : "mustang",
        type : "car"
    }

    const updatedMyVehicle= {
        type  : "car",
        year : "2021",
        color : "red"

    }
    // const updated =[...MyVehicle,...updatedMyVehicle]

  return (
    <div><h1 className = "App" style={{backgroundColor:"black",color:"white"}}>
            Spreadoperator
    </h1>
    <h1>{num1}</h1>
    <h1>{num2}</h1>
    <h1>{numberscombined}</h1>
    
    </div>
  )
}
