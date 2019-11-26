import React from 'react'
import Component from './Component'

class ComponentOne extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            deleting: false,
            deleted:false
        };
        this.handleDelete=this.handleDelete.bind(this);
    }
   
    handleDelete (e) { 
        this.setState({deleting: true})
        fetch('http://localhost:3000/employees/'+ this.props.data.id.toString(), {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({id:this.props.data._id})
        }).then(this.setState({deleting: false, deleted: true}))
    }
    
    render() {

		return (
            <div>
                {this.state.deleted? null :
                    this.state.deleting? <p>Deleting...</p> :
                        <div>
                        <p>Name : {this.props.data.name}</p>
                        <p>company : {this.props.data.company}</p>
                        <p>age : {this.props.data.age}</p>
                        <p>email : {this.props.data.email}</p>
                        <p>isActive : {this.props.data.isActive.toString()}</p>    
                        <button onClick={this.handleDelete}>Delete</button>
                        <hr />                  
                     </div> 
                }
           </div>
         
        )
        }
        
        
}

export default ComponentOne