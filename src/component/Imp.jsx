import React from 'react'
import Calculate, {name,age,Demo} from './Exp'
import email,{ phno,address } from './Exp'
import styles from './style.module.css'
// import email from './Exp'

export default function Imp() {
    let jsx = <h1>HEllO</h1>
  return (
    <div className={styles.myClass}>
    <h1 className = "App" style={{backgroundColor:"black",color:"white"}}>
            Import start
    </h1>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{Demo()}</h1>
    <h1>{address}</h1>
    <h1>{email}</h1>
    <button  onClick={()=>Calculate(145,29)}>Calculate</button>
    {jsx}
    </div>
  )
}
