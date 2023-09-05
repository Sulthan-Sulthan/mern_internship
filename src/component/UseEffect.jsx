import React,{useEffect,useState} from 'react'

export default function UseEffect() {
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(10)

  // Function to increment count by 1
//   const incrementCount = () => {
//     // Update state with incremented value
//     setCount(count + 1);
//   };

  useEffect(()=>{
    // alert("hello")
    setNumber2(number1*10)
  },[number1])
  return (
    <div>
    <h1  className="App" style={{backgroundColor:"blue" , color:"white"}}>UseEffect</h1>
     <h1>Number: {number1}</h1>
     <h1>Number: {number2}</h1>
    <button onClick={()=>setNumber1(number1+1)}>+</button>

    
    </div>
  )
}
