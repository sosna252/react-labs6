import React from 'react'


function ComponentOne(props) {

		return (
            <div>
                <p>Name : {props.data.name}</p>
                <p>company : {props.data.company}</p>
                <p>age : {props.data.age}</p>
                <p>email : {props.data.email}</p>
                <p>isActive : {props.data.isActive.toString()}</p>      
                <hr />       
            </div>
           
            
		)
	
}

export default ComponentOne