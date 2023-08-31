import React from 'react'

export default function Props() {
    function Car({brand,model}){
        return <h2>I Have {brand} model {model}</h2>
    }
    function Vehicle(props){
        return <h2>{props.brand}</h2>
    }
    function Showroom(){
        const carName = "BMW"
        return(
            <>
            <Vehicle brand = {carName}/>
            </>
        )
    }
    const Shoot=()=>{
        alert("this is Shoot function !!!!")
    }
    const handleChange=(e)=>{
        // alert(e.target.value)
        console.log(e.target.value)
    }
    function MissedGoal(){
        return <h1>Missed!</h1>
    }
    function MadeGoal(){
        return <h1>Goal</h1>
    }
    function Goal(props){
        const abc = props.isGoal;
        if(abc){
            return <MadeGoal/>
        }
        else{
            return <MissedGoal/>
        }
    }
    function MyForms(){
        return (
            <form method='POST' enctype ='multipart/form-data'>
                <label>Enter your name 
                <input type='text' name='name'/>
                </label>
                <input type='submit' value='submit'/>
            </form>
        )
    }
    return (

    <div>
        <h1 className = "App" style={{backgroundColor:"black",color:"white"}}>
            Props
    </h1>
    <Car brand ="BMW" model ={2023}/>
    <Showroom/>
    <button onClick ={Shoot}>Shoot </button>
    <input type='text' onChange={handleChange} placeholder='Enter your name'/>
    <Goal isGoal ={false}/>
    <MyForms/>
    </div>
  )
}
