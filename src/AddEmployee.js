import React from 'react'
class AddEmployee extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            Visible: false
          }

          this.handleAdd=this.handleAdd.bind(this);
    }
       
    handleAdd (event) {
        this.setState({Visible: !this.state.Visible});}


    render(){
    return(
        <div>
        {this.state.Visible ?  
         (<button onClick={this.handleAdd}>Add Employee</button>  ):
      
        
        
            <form onSubmit={this.onSubmit}>
                <p>ID: <input disabled></input></p>
                <p>Name: <input ref="name"></input></p>
                <p>Age: <input type="number" ref="age"></input></p>
                <p>Company: <input ref="comapny"></input></p>
                <p >email: <input type="email" ref="email"></input></p>
                <p>Active: <input type="checkbox" ref="active"></input></p>                
                <button type="button" onClick={(e) => this.handleAdd(e)} >Cancel</button>
                <button type="button" onClick={(e) => this.handleAdd(e)} >Add</button>
            </form> }      
            <br />
       
        </div>
    )
    }
}

export default AddEmployee 