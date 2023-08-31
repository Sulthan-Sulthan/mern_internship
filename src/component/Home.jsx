import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <h1>
        This is Home Component
    </h1>
    <Link to ="/arrow">Go to Arrow function</Link><br></br>
    <Link to ="/variable">Go to VAriable</Link><br></br>
    <Link to ="/array">Go to array</Link><br></br>
    <Link to ="/destructing"><button>Go to destructing</button></Link>
    <Link to ="/usestate"><button>usestate</button></Link>

    </div>
  )
}
