import Employee from './Employee'
import React from 'react'

const App = (props) => {
   
   
    const employeelist = props.employees.map(Emp => {
        return <Employee key={Emp._id} data = {Emp}/>
    }) 
     
 
    return (
        <div>
        {employeelist}
        </div>
    )
}
export default App