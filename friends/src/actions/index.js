import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS_FAIL";



const url = "http://localhost:5000/api";

export const getFriends = () => dispatch => {

dispatch ({type: FETCHING_FRIENDS})
axios
    .get("http://localhost:5000/api/friends/")
    .then(res => {
        console.log(res.data)
        dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: res.data})
    .catch(err=> dispatch({type: FETCHING_FRIENDS_FAIL, payload: err}))
    })

}

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND = "ADD_FRIEND_FAIL";

export const addFriend = () => dispatch => {

    dispatch ({type: ADD_FRIEND})
    axios
        .post("http://localhost:5000/api/friends/", friends)
        .then(res => {
            console.log(res.data)
            dispatch({type: ADD_FRIEND_SUCCESS, payload: res.data})
        .catch(err=> dispatch({type: ADD_FRIEND_FAIL, payload: err}))
        })
    
    }