import React from 'react'
class AddEmployee extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            Visible: false,
            active:false,
            age:"",
            name:"",
            company:"",
            email:"",
          }

          this.handleAdd=this.handleAdd.bind(this);
          this.handleChange=this.handleChange.bind(this);
    }
       
    componentPost() {

        this.setState({ isSaving: true });
        fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
			body: JSON.stringify( {
                "id": Math.random()*99999999*Math.random().toString(),
                "isActive": this.state.active,
                "age": this.state.age,
                "name": this.state.name,
                "company": this.state.company,
                "email": this.state.email
              }),
        }).then(() => {this.setState({ isSaving: false })
        })
        this.handleAdd(event);
    }

    handleAdd (event) {
        this.setState({Visible: !this.state.Visible});}

    handleChange(event){
            this.setState({ [event.target.name] : event.target.value });
        }       

    render(){
    return(
        <div>
        {this.state.Visible ?  
         (<button onClick={this.handleAdd}>Add Employee</button>  ):
      
        
        
            <form onSubmit={this.onSubmit}>
                <p>ID: <input disabled></input></p>
                <p>Name: <input ref="name" name="name" onChange={this.handleChange}></input></p>
                <p>Age: <input type="number" ref="age"name="age" onChange={this.handleChange}></input></p>
                <p>Company: <input ref="comapny" name="company" onChange={this.handleChange}></input></p>
                <p >email: <input type="email" ref="email" name="email" onChange={this.handleChange}></input></p>
                <p>Active: <input type="checkbox" ref="active" name="isActive" onChange={this.handleChange}></input></p>                
                <button type="button" onClick={(e) => this.handleAdd(e)} >Cancel</button>
                <button type="button" onClick={(e) => this.componentPost()} >Add</button>
            </form> }      
            <br />
       
        </div>
    )
    }
}

export default AddEmployee 