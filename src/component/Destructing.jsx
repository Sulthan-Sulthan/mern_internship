import React from 'react'

export default function Destructing() {
    const car = ['Benz','suzuki','bmw']
    const car1 = car[0]
    const car2 = car[1]
    const car3 = car[2]

    const [car11,car22,car33]=car

    const a = [5 + 5,10+10,20+20]
    const [x,y,z] = a

    const vehicle = {
        brand : "Ford",
        model : "mustang",
        type : "car",
        year : 2021,
        color : "black",
       registration:{
        city : "manglore",
        country : "india",
        state : "karnataka"

       }
    }

    const {brand,model,type,year,color,registration:{city,state}} = vehicle

  return (
    <div><h1 className = "App" style={{backgroundColor:"black",color:"white"}}>
            Destructing
    </h1>
    <h1>{car1}</h1>
    <h1>{car2}</h1>
    <h1>{car3}</h1>
    <h1>{car11}</h1>
    <h1>{car22}</h1>
    <h1>{car33}</h1>
    <h1>{x+y*z}</h1>
    <h1> I have {color} {brand} {model} {state}</h1>
    </div>
  )
}
