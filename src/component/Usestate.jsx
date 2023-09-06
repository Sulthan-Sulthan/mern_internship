import React,{ useState ,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Usestate() {
    const [name,setName] = useState("Ramzi");
    const handleName=()=>{
       setName("Rahul")
    }

    const [color,setColor] = useState("aqua")

    const handleColorChange=(color)=>{
      setColor(color);
    }

    const [student,setStudent]=useState({
      name:"Rahul",
      phone:9876543210,
      address:"mangalore"
    })
    const handleStudentChange=(field,value)=>{
      setStudent(prevStudent=>({
        ...prevStudent,
        [field]: value
      }));
    };
    const handleSave=()=>{
        localStorage.setItem("Name",name)
    }
    let initialValue = localStorage.getItem("student")?JSON.parse(localStorage.getItem("student")):[]
    const [display, setDisplay]=useState(initialValue)

    const [student1 ,setStudent1] = useState({
      
    })
    console.log(student1,"student1")


    const handleStudent=(e)=>{
    setStudent1({...student1,[e.target.name]:e.target.value})
    }
    let nav =useNavigate();
    const  handleSubmit =()=>{
      setDisplay([...display,student1])
      let newdisplay =[...display,student1]
      localStorage.setItem("student",JSON.stringify(newdisplay))
      nav('/view')
      
    }
    // useEffect(()=>{
    //   localStorage.setItem( 'student',JSON.stringify(display) )
    // },[display])

    


  return (
    <div>
        <h1 style={{backgroundColor:"blue",color:"white"}}>Usestate Start</h1>
        {/* <h1>{name}</h1>
        <button onClick={handleName}>Change name</button>
        <hr/>
        <h1 style={{backgroundColor:{color}}}>My name is: {name}</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter your name'/>
        <button onClick={() => handleColorChange("yellow")}>Yellow</button>
      <button onClick={() => handleColorChange("blue")}>Blue</button>
      <button onClick={() => handleColorChange("green")}>Green</button>


        <h1>Name:{student.name}</h1>
        <h1>Phone:{student.phone}</h1>
        <h1>Address:{student.address}</h1>

        <input type="text" value={student.name} onChange={(e) =>handleStudentChange("name", e.target.value)} placeholder='enter your Name'/><br/>
        <input type="text" value={student.phone} onChange={(e) => handleStudentChange("phone", e.target.value)} placeholder='enter your Phone'/><br/>
        <input type="text" value={student.address} onChange={(e) => handleStudentChange("address", e.target.value)} placeholder='enter your Address' /><br/>
        <hr/>
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
        <button onClick={handleSave}>Save Name</button> */}
        <h2>Student Form</h2>
        <input type='text' name='name' placeholder='enter your name' onChange={handleStudent}/><br/><br/>
        <input type='text' name='phone' placeholder='enter your phone' onChange={handleStudent}/><br/><br/>
        <input type='text' name='email' placeholder='enter your email' onChange={handleStudent}/><br/><br/>
        <input type='text' name='address' placeholder='enter your addresss' onChange={handleStudent}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}