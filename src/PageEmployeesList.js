import Employee from './Employee'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom"


const App = (props) => {
   
   
    const employeelist = props.employees.map(Emp => {
        return <Employee key={Emp._id} data = {Emp}/>
    }) 

 
    return (
        <div>
        
        {employeelist}
        
        <Link to="/new">
            <button>Add new Employee</button>
            </Link>
        </div>
    )
}
export default App