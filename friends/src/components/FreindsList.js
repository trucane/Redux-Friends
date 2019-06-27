import React from 'react';
import {connect} from 'react-redux';
import {getFriends, deleteFriend} from '../actions'

//create a friends class, a blank state object, render a div
//import connect, export the connect HOF and pass mstp, component, and all action functions




class FriendsList extends React.Component{

    state = {
        friends:[]
    }

    //invoke compdidmount
    componentDidMount(){

        //call action get friends
        this.props.getFriends()
        //create HOF action in action
    }

    deleteFriends = (e, id) =>{
        e.preventDefault();
        console.log(id)
        this.props.deleteFriend(id);
    }




    render(){
        return(
                <div className="friend-container">
                    {this.props.friends.map(friend =>(
                            <div key={friend.id}className="friend-card">
                                <div>{friend.name}</div>
                                <div>{friend.age}</div>
                                <div>{friend.email}</div>
                                <button onClick={(e) => this.deleteFriends(e, friend.id)}>delete</button>
                            </div>
                    ))}
                </div>
        )
    }
}


const mapStateToProps = ({friends}) =>({
    friends
})


export default connect(mapStateToProps, {getFriends,deleteFriend})(FriendsList);