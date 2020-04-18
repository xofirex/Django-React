import axios from 'axios';

import {ADD_USER, DELETE_GROUP, GET_GROUPS, ADD_GROUP} from "./types";

// GET Groups
export const getGroups = () => dispatch => {
    axios.get('/api/groups/')
        .then(res => {
            dispatch({
                type: GET_GROUPS,
                payload: res.data
            });
        }).catch(err => console.log(err));

}
//Delete GROUP
export const deleteGroup = (id) => dispatch => {
    axios
        .delete(`/api/groups/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_GROUP,
                payload: id
            });
        }).catch(err => console.log(err));

}
// ADD GROUP
export const addGroup = (group) => dispatch => {
    axios.post('/api/groups/', group)
        .then(res => {
            dispatch({
                type: ADD_GROUP,
                payload: res.data
            });
        }).catch(err => console.log(err));

}