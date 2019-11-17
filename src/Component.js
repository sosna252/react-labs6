import React from 'react'
import EmployeeList from './EmployeeList'


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			employees: [],
			loading: true
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
		return (
			<EmployeeList employees={this.state.employees}/> 
		)
        	
	}
}

export default App