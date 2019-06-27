//4. Create reducers folder, and index.js file.
//5. create a state object and an export reducer function.

//back from action...
//import Login call to action
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
    FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL
} from '../actions'


const initialState = {
    friends:[],
    //add to inital state for login
    error:'',
    loggingIn:false,
    fetchingData:false
}


const reducer = (state = initialState, action) => {
    //create switch statement
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                error:'',
                loggingIn:true
            };

        case LOGIN_SUCCESS:
            return{
                ...state,
                error:'',
                loggingIn:false
            };

        case LOGIN_FAIL:
            return{
                ...state,
                error:'Bad Loggin',
                loggingIn:false
            };

        case FETCH_DATA_START:
            return{
                ...state,
                error:'',
                fetchingData:true
            };

        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                friends:action.payload,
                fetchingData:false
            };

        case FETCH_DATA_FAIL:
            return{
                ...state,
                error:'Couldnt retreive Data',
                fetchingData:false
            };

        default:
            return state
    }

    //go to component login and create onclick login function

}


export default reducer