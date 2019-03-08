

import {FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAIL, FETCHING_FRIENDS} from '../actions';
import {ADD_FRIEND_SUCCESS, ADD_FRIEND_FAIL, ADD_FRIEND} from '../actions'

export const friendsReducer= (state=initialState, action) => {
    switch (action.type){
        case FETCHING_FRIENDS:
            return {...state, fetching:true};
        case FETCHING_FRIENDS_SUCCESS:
            return {friends:action.payload, fetching:false};
        case FETCHING_FRIENDS_FAIL:
            return {...state, fetching:false, error:action.payload};
        default:
            return state;
    
    }
}