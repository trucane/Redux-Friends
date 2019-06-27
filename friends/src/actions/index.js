//import axios
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

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
    axiosWithAuth()
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
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getFriends = () => dispatch =>{
    console.log('I am fetching data')
    dispatch({ type: FETCH_DATA_START});

    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res =>{
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err.response))
}


export const deleteFriend = (id) => dispatch =>{
    console.log('I am th id', id)
    dispatch({ type: FETCH_DATA_START});

    axiosWithAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res =>{
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err.response))
}


