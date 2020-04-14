import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import {clearContacts} from '../../actions/contactActions';


const Navbar = ({title, icon, isAuthenticated, user}) => {

    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
      <Fragment>
          <li>Hello {user && user.name}</li>
          <li>
              <a onClick={onLogout} href="#!">
                  <i className="fas fa-sign-out-alt"/>  {' '}
                  <span className="hide-sm">Logout</span>
              </a>
          </li>
      </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );


    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout, clearContacts}
)(Navbar);
