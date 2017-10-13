import React, {Component} from 'react';

import './Video.css';

// Import custom components
import Home from './Home.js'
import Verify from './Account/Verify.js'
import Reset from './Account/Reset.js'
import Nav from './components/page/Nav.js'

import AccountPage from './pages/AccountPage.js'
import LoginPage from './pages/LoginPage.js'
import SignupPage from './pages/SignupPage.js'
import VideoPage from './pages/VideoPage.js'
import SharePage from './pages/SharePage.js'
import AddCardPage from './pages/AddCardPage.js'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.js'
import AcceptableUsePolicyPage from './pages/AcceptableUsePolicyPage.js'
import CookiesPolicyPage from './pages/CookiesPolicyPage.js'

import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const authUtils = require('./utils/auth.js');

const ReactGA = require('react-ga');
ReactGA.initialize(window.REACT_APP_GA_TRACKING_CODE);


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: authUtils.hasAuth()
        };
    }

    onAuthStateChange(loggedIn) {
        this.state = {
            loggedIn: loggedIn
        };

        // TODO workout how to reload Nav?
        if(!loggedIn) {
            authUtils.clearCredentials()
            window.location.href = '/';
        }
        else {
            window.location.href = '/video';
        }
    }

    logPageView() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/"
                           component={PageWrapper}
                           loggedIn={this.state.loggedIn}
                           logIn={() => {this.onAuthStateChange(true)}}
                           logOut={() => {this.onAuthStateChange(false)}}
                           onUpdate={this.logPageView}
                    >
                        <IndexRoute component={Home} />
                        <Route path="video" component={VideoPage} />
                        <Route path="account" component={AccountPage} plan={this.state.plan} />
                        <Route path="login" component={LoginPage} loggedIn={() => {this.onAuthStateChange(true)}} />
                        <Route path="signup/:plan" component={SignupPage} />
                        <Route path="verify" component={Verify} />
                        <Route path="reset" component={Reset} />
                        <Route path="share/:shareId" component={SharePage} />
                        <Route path="privacy-policy" component={PrivacyPolicyPage} />
                        <Route path="terms-and-conditions" component={TermsAndConditionsPage} />
                        <Route path="acceptable-use-policy" component={AcceptableUsePolicyPage} />
                        <Route path="cookies-policy" component={CookiesPolicyPage} />
                        <Route path="subscription/addCard" component={AddCardPage} />
                    </Route>
                </Router>
            </MuiThemeProvider>
        );
    }

}

export default App;

const style = {
    footer: {
        fontSize: "15px"
    },

    footerRight: {
        float: "right",
    },

    footerRightUl: {
        listStyle: "none",
        margin: 0,
        marginTop: "-20px",
        padding: 0,
        verticalAlign: "top",
        display: "inline-block"
    },

    footerRightUlLi: {
        display: "inline-block",
        margin: "0 5px"
    },

    footerRightA: {
        color: "#444"
    },

};

class PageWrapper extends Component {

    render() {
        return (
            <div>
                <Nav loggedIn={this.props.route.loggedIn} logIn={this.props.route.logIn} logOut={this.props.route.logOut} />

                <div>
                    {this.props.children}
                </div>

                <div>
                    <hr />
                    <footer className="container" style={style.footer}>
                        <div className="row justify-content-lg-center">
                            <div className="col-lg-9">
                                <div className="footer_left">
                                    <span>© Dashvid.io</span>
                                </div>
                                <div style={style.footerRight}>
                                    <ul style={style.footerRightUl}>
                                        <li style={style.footerRightUlLi}>
                                            <Link to="/terms-and-conditions"
                                                  style={style.footerRightA} >Terms &amp; Conditions
                                            </Link>
                                        </li>
                                        <li style={style.footerRightUlLi}>
                                            <Link to="/privacy-policy"
                                                  style={style.footerRightA} >Privacy Policy
                                            </Link>
                                        </li>
                                        <li style={style.footerRightUlLi}>
                                            <Link to="/acceptable-use-policy"
                                                  style={style.footerRightA} >Acceptable use Policy
                                            </Link>
                                        </li>
                                        <li style={style.footerRightUlLi}>
                                            <Link to="/cookies-policy"
                                                  style={style.footerRightA} >Cookies Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('container')
);

