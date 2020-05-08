import {ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT, CLEAR_CURRENT,
    UPDATE_CONTACT, FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR,
    CLEAR_CONTACTS,
    GET_CONTACTS
} from "./types";
import axios from 'axios';



// Get Contacts
export const getContacts = () => async dispatch => {
    try {
        const res = await axios.get('/api/contacts');

        dispatch({type: GET_CONTACTS, payload: res.data})
    }catch (err) {
        dispatch({type: CONTACT_ERROR, payload: err.response.data.msg})
    }


};

// Add Contact
export const addContact = (contact) => async dispatch => {
    const config = {
        headers: {
            'contant-type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/contacts', contact, config);

        dispatch({type: ADD_CONTACT, payload: res.data})
    }catch (err) {
        dispatch({type: CONTACT_ERROR, payload: err.response.msg})
    }
};
// Delete Contact
export const deleteContact = (id) => async dispatch => {
    try {
        await axios.delete(`/api/contacts/${id}`);

        dispatch({type: DELETE_CONTACT, payload: id})
    }catch (err) {
        dispatch({type: CONTACT_ERROR, payload: err.response.msg})
    }
};
// Update Contact
export const updateContact = (contact) => async dispatch => {
    const config = {
        headers: {
            'contant-type': 'application/json'
        }
    };
    try {
        const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);

        dispatch({type: UPDATE_CONTACT, payload: res.data});
    }catch (err) {
        dispatch({type: CONTACT_ERROR, payload: err.response.msg})
    }
};
// Clear Contacts
export const clearContacts = () => dispatch => {
    dispatch({type: CLEAR_CONTACTS});
};

// Set Current Contact
export const setCurrent = (contact) => dispatch => {
    dispatch({type: SET_CURRENT, payload: contact});
};
// Clear Current Contact
export const clearCurrent = () => dispatch => {
    dispatch({type: CLEAR_CURRENT});
};
// Filter Contacts
export const filterContacts = (text) => dispatch => {
    dispatch({type: FILTER_CONTACTS, payload: text});
};
// Clear Filter
export const clearFilter = () => dispatch => {
    dispatch({type: CLEAR_FILTER});
};
