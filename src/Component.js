import React from 'react'
import EmployeeList from './EmployeeList'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

    
	componentDidMount() {
        fetch('http://localhost:3000/employees')
        .then(resp=>resp.json())
        .then(resp=> 
            {
                this.setState({employees: resp})
            })
		
    }
    
    

	render() {

		return (
			<EmployeeList employees={this.state.employees}/>
		)
           
            
		
	}
}

export default App