import React, {useEffect} from 'react';
import Contacts from "../contacts/Contacts";
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import {loadUser} from "../../actions/auth";
import store from "../../store";



const Home = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <div className='grid-2'>
            <div>
               <ContactForm/>
            </div>
            <div>
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
    );
};

export default Home;
