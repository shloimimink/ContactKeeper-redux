import React, {Fragment, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import {getContacts} from '../../actions/contactActions';
import Spinner from "../layout/Spinner";


const Contacts = ({contact: {loading, filtered, contacts, error}, getContacts}) => {
console.log(contacts)
    useEffect(() => {
            getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact</h4>
    }

    if (error) {
        return <h4>{error}</h4>
    }

    return (
        <Fragment>
            {contacts !== null && !loading ? ( <TransitionGroup>
                {filtered !== null
                    ? filtered.map(contact => (
                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                            <ContactItem contact={contact}/>
                        </CSSTransition>
                    ))
                    : contacts.map(contact =>(
                        <CSSTransition key={contact._id} timeout={500} classNames="item">
                            <ContactItem contact={contact}/>
                        </CSSTransition>
                    ))}
            </TransitionGroup>) : <Spinner/>}

        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    contact: state.contact
});

export default connect(mapStateToProps, {getContacts}) (Contacts);
