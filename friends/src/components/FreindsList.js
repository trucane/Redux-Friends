import React from 'react';
import connect from 'react-redux';




class FriendsList extends React.Component{

    state = {
        friends:[]
    }



    render(){
        return(
            <div>I come from Friends</div>
        )
    }
}


const mapStateToProps = state =>{
    console.log(state)
}


export default connect(
    mapStateToProps, {}
)(FriendsList);