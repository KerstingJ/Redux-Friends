import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions/index'

const FriendsList = props => {

    useEffect(()=>{
        props.fetchFriends()
    }, [])

    return (
        <div>
            {props.friends.length}
        </div>
    )
}

export default connect(state => ({
    friends: state.friends.friends
}), {
    fetchFriends
})(FriendsList)