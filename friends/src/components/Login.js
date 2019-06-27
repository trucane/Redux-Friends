import React from 'react';
import {connect} from 'react-redux'; 

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
        if(this.state.credentials.username.trim() === '' || this.state.credentials.password.trim() === '' ){

            console.log('empty')
        }else{
            //invoke imported login action pass in credentials
            this.props.login(this.state.credentials)
            this.props.history.push('/friends')
            //import component login to App.js
        }
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
           <form onSubmit={this.login}>
               <input 
               type='text'
               name="username"
               onChange={this.changeHandler}
               placeholder="username"
                />

<input 
               type='password'
               name="password"
               onChange={this.changeHandler}
               placeholder="password"
                />

                <button>Login</button>
           </form>
       )
   }
}


//create mstp
//pass state as prop
const mapStateToProps = state =>({
    loggingIn:state.loggingIn
})


export default connect(mapStateToProps, {login})(Login);