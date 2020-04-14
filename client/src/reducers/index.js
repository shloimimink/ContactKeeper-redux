import { combineReducers } from "redux";
import contactReducer from './contactReducer';
import auth from './auth';
import alert from './alert';


export default combineReducers({
    contact: contactReducer,
    auth,
    alert
});
