import React, { useEffect } from "react";
import { connect } from "react-redux";

import FriendCard from "../components/FriendCard"

import { fetchFriends } from "../actions/index";

const FriendsList = props => {
  useEffect(() => {
    props.fetchFriends();
  }, []);

  return (
    <div>
      {props.friends.length > 1 &&
        props.friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
        ))}
    </div>
  );
};

export default connect(
  state => ({
    friends: state.friends.friends
  }),
  {
    fetchFriends
  }
)(FriendsList);
