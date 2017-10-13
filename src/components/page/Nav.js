import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const style = {
    logo: {
        "height": "40px",
        "cursor": "hand"
    },

    navItem: {
        marginLeft: "10px",
        fontSize: "14px"
    },

    btnSecondary: {
        fontSize: "14px",
        borderRadius: "50px",
        border: "1.5px solid #555",
        backgroundColor: "#fff",
        color: "#555",
        padding: "8px 20px",
    },
    
};

export default class Nav extends Component {

    handleLogout(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        this.props.logOut()
    }

    render() {
        const {loggedIn} = this.props;

        let links
        if(loggedIn) {
            links = (
                <ul className="navbar-nav ml-auto">
                    <li style={style.navItem}>
                        <Link to="/video" className="nav-link" data-qa="nav-btn-videos">Videos</Link>
                    </li>
                    <li style={style.navItem}>
                        <Link to="/account" className="nav-link" data-qa="nav-btn-account">Account</Link>
                    </li>
                    <li style={style.navItem}>
                        <a onClick={this.handleLogout.bind(this)}
                           className="btn btn-secondary"
                           style={style.btnSecondary}
                           data-qa="nav-btn-logout">Log out</a>
                    </li>
                </ul>
            )
        } else {
            links = (
                    <ul className="navbar-nav ml-auto">
                        <li style={style.navItem}>
                            <Link to="/login"
                                  className="btn btn-secondary"
                                  style={style.btnSecondary}
                                  data-qa="nav-btn-login">Log in</Link>
                        </li>
                    </ul>
                    )
        }

        return (
            <div className="container">
                <div className="row justify-content-lg-center">

                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" activeClassName="navbar-brand">
                                <img src="images/dashvid.svg" alt="DashVid.io" style={style.logo} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {links}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        );
    }
}

Nav.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired
};