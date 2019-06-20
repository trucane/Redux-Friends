//import axios
import axios from 'axios';

//create exportable call to action variables

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";


//CREATE LOGIN HOF ACTION PROCESS
//pass in credentials as 1st func param
//pass in dispatch as 2nd func param
export const login = creds => dispatch =>{
    //1st step is start.. dispatch start to reducer
    dispatch({ type: LOGIN_START});

    //call axios to api
    axios
    .post('http://localhost:5000/api/login', creds)
    .then( res => {

        // 200 success set token to local storage then next()/dispatch to next action
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
    })
    //if failure get error
    .catch(err => console.log(err.response))
}


//after login works and token is successfully passed start coding for fetching data


