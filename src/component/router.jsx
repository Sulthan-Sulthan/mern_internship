import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Arrowfunction from './arrowfunction'
import Variable from './variable'
import Array from './Array'
import Destructing from './Destructing'
import Spreadoperator from './Spreadoperator'
import Usestate from './Usestate'
export default function router() {
  return (
    <div>
        {/* <h1>This is Router Component</h1> */}
        <BrowserRouter>
            <Routes>
                <Route exact path ="/" element={<Home/>}/>
                <Route exact path ="/arrow" element={<Arrowfunction/>}/>
                <Route exact path ="/variable" element={<Variable/>}/>
                <Route exact path ="/destructing" element={<Destructing/>}/>
                <Route exact path ="/spreadoperator" element={<Spreadoperator/>}/>
                <Route exact path ="/array" element={<Array/>}/>
                <Route exact path ="/usestate" element={<Usestate/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
