import React from 'react';





class Login extends React.Component{

    state = {
        credentials:{
            username:'',
            password:''
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
           <form>
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


export default Login;