import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
}from "react-router-dom"

import { withRouter } from "react-router-dom";

class AddEmployee extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            Saving: false,
            active:false,
            age:"",
            name:"",
            company:"",
            email:"",
          }

          this.handleAdd=this.handleAdd.bind(this);
          this.handleChange=this.handleChange.bind(this);
          this.componentPost=this.componentPost.bind(this);
    }
       
    componentPost(e) {
        e.preventDefault();
        fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
			body: JSON.stringify( {
                "isActive": this.state.active,
                "age": this.state.age,
                "name": this.state.name,
                "company": this.state.company,
                "email": this.state.email
              })
            }).then(()=>{this.props.history.push('/');
        });   
    }

    handleAdd (event) { 
        this.setState({Visible: !this.state.Visible});}

    handleChange(event){
            this.setState({ [event.target.name] : event.target.value });
        }       

    render(){

    return(
        <div>
        <div> 
        {this.state.Saving ? <p>Saving...</p>:
            <form>
                <p>ID: <input disabled></input></p>
                <p>Name: <input ref="name" name="name" onChange={this.handleChange}></input></p>
                <p>Age: <input type="number" ref="age"name="age" onChange={this.handleChange}></input></p>
                <p>Company: <input ref="comapny" name="company" onChange={this.handleChange}></input></p>
                <p >email: <input type="email" ref="email" name="email" onChange={this.handleChange}></input></p>
                <p>Active: <input type="checkbox" ref="active" name="isActive" onChange={this.handleChange}></input></p>                
                <button type="button" onClick={(e) => this.props.history.push("/")}>Cancel</button>
                <button type="button" onClick={(e) => this.componentPost(e)} >Add</button>
            </form> }      
            <br/>
        </div>
        </div>
    )
    }
}

export default withRouter(AddEmployee) 