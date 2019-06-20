import React from 'react';
import connect from 'react-redux'; 

//import call to action login function
import{login} from '../actions';




class Login extends React.Component{

    //create login form
    // create onchange handler to update state data
    //import connect and create connect HOF pass in mstp 1st function param, class 2nd function param
    // in 1st connect HOF param 2nd param is all imported action functions we will use from
    //create actions folder and functions

    state = {
        credentials:{
            username:'',
            password:''
        }
    }

    // create login on click function
    login = (e) =>{
        e.preventDefault();
        //invoke imported login action pass in credentials
        this.props.login(this.state.credentials)
        //import component login to App.js
    }

    changeHandler = (e) =>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }


   render(){
       return(
           <form onSubmit={}>
               <input 
               type='text'
               name="username"
               onchange={changeHandler}
               placeholder="username"
                />

<input 
               type='password'
               name="password"
               onchange={changeHandler}
               placeholder="password"
                />
           </form>
       )
   }
}


export default connect(mapStateToProps, {login})(Login);