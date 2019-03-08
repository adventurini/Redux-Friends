import React from 'react';
import { connect } from 'redux';
import { getFriends} from '../actions';

class FriendsComponent extends React.Component {

    componentDidMount(){
        this.props.getFriends()
    }
}

render(){
    return(
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect( mapStateToProps, {getFriends}) (FriendsComponent);