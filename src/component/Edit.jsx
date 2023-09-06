import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Edit() {

  let params = useParams();
  console.log(params)

  const [student,setStudent] =useState({})

  useEffect(()=>{
    let alldata =JSON.parse(localStorage.getItem("student"))
    let  singleStudent = alldata.filter((item,index)=>{ return index == params.id})
      console.log(singleStudent)
      setStudent(singleStudent[0])
  },[])
  console.log(student)

  const handleStudent=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
    }

    const Update =()=>{
      let alldata =JSON.parse(localStorage.getItem("student"))
      alldata.splice(params.id,1,student)
      localStorage.setItem("student",JSON.stringify(alldata))
    }
  return (
    <div>
       <h2>Student Edit Form</h2>
        <input type='text' name='name' placeholder='enter your name' value={student.name} onChange={handleStudent}/><br/><br/>
        <input type='text' name='phone' placeholder='enter your phone'  value={student.phone} onChange={handleStudent}/><br/><br/>
        <input type='text' name='email' placeholder='enter your email' value={student.email} onChange={handleStudent}/><br/><br/>
        <input type='text' name='address' placeholder='enter your addresss' value={student.address} onChange={handleStudent}/><br/><br/>
        <button onClick={Update}>Update</button>
    </div>
  )
}
