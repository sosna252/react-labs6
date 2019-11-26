import React from 'react'
import PageEmployeesList from './PageEmployeesList'
import PageEmployee from './PageEmployee'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom"

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			employees: [],
			loading: true,
			//addemp: false
		};
	
	}
	componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://localhost:3000/employees')
        .then(resp=>resp.json())
        .then(resp=> 
            {
                this.setState({employees: resp, loading:false})
            })
	}
	
	
	render() { 
		if (this.state.loading) {
            return <p>Loading ...</p>;
	  	}  
            return(
            <div>
              <PageEmployee handleAddEmployee={this.handleAddEmployee}/>
                      <PageEmployeesList employees={this.state.employees}/>
                   
                      
          </div>
            )

             //   <div>
             //       <AddEmployee handleAddEmployee={this.handleAddEmployee} />
             //       <EmployeeList employees={this.state.employees}/>
             //   </div>
           // )
        }
		
		
        	
	
}

export default App