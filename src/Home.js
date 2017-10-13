import React, {Component} from 'react';
import Plans from './components/plan/Plans.js'

const ReactGA = require('react-ga');

const style = {
    hero: {
        marginTop: "100px",
        marginBottom: "100px"
    },

    heroImg: {
        paddingTop: "40px",
        width: "260px",
        height: "334px",
        display: "inline-block",
        opacity: 0.85,
        background: "#fff",
        boxShadow: "0 4px 10px 0px rgba(116,116,116,0.15)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundImage: "url(images/logo_bg.svg)",
        transition: "0.5s"
    },

    feature: {
        margin: "70px auto"
    },

    lead: {
        color: "#6A6A6A",
        marginBottom: "20px"
    },

    leadSmall: {
        fontSize: "16px",
        color: "#A2A0A0",
        fontWeight: 300,
        lineHeight: "28px",
        marginTop: "15px",
    },

    btnPrimary: {
        backgroundColor: "#38CE97",
        border: "1px solid #38CE97",
        borderRadius: "3px"
    },

    btnLg: {
        fontSize: "16px",
        letterSpacing: "1px",
        padding: "18px 30px",
    },

    plans: {
        margin: "100px auto 50px"
    },

};

class Home extends Component {

    handlePlanSelect(id) {
        ReactGA.event({
            category: 'Signup',
            action: 'Plan Selected',
            value: id
        });
        this.props.router.push('/signup/' + id);
    }

    render() {
        return (
            <div>
                <div className="md-center">
                    <div className="row justify-content-lg-center" style={style.hero}>
                        <div className="col-lg-4 text-center">
                            <div style={style.heroImg}>
                                <img src="images/dashcam.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h1>Cloud storage for your Dashcam footage.</h1>
                            <hr />
                            <p style={style.lead}>Simple Pricing. Try before you buy.</p>
                            <a href="#plans" className="btn btn-primary btn-lg pulse"
                               style={Object.assign(style.btnPrimary, style.btnLg)}
                               // onClick={() => this.handlePlanSelect("free")}
                            >Signup Now</a>
                        </div>
                    </div>

                    <hr />

                    <div className="row justify-content-lg-center" style={style.feature}>
                        <div className="col-lg-6">
                            <h2>Secure Cloud Storage</h2>
                            <p style={style.leadSmall}>All of your videos are stored encrypted in the cloud. This gives you the peace of mind that your Dashcam wont overwrite footage you may need in the future</p>
                        </div>

                        <div className="col-lg-3 text-center">
                            <img src="images/secure_img.png" alt="" />
                        </div>
                    </div>

                    <hr />

                    <div className="row justify-content-lg-center" style={style.feature}>
                        <div className="col-lg-3 text-center">
                            <img src="images/mobile_img.png" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Mobile Optimised</h2>
                            <p style={style.leadSmall}>All of your footage will be transcoded to a mobile friendly format. This means you can easily view your footage without having to worry about it eating all of your data.</p>
                        </div>

                    </div>

                    <hr />

                    <div className="row justify-content-lg-center" style={style.feature}>
                        <div className="col-lg-6">
                            <h2>Share Your Clips</h2>
                            <p style={style.leadSmall}>Share selected footage publicly. Either by sharing a link or posting it to your favorite social media platform</p>
                        </div>

                        <div className="col-lg-3 text-center">
                            <img src="images/share_img.png" alt="" />
                        </div>
                    </div>

                </div>

                <hr />


                <div className="container" style={style.plans} id="plans">
                    <div className="row justify-content-lg-center">
                        <div className="col-lg-6 text-center">
                            <h3>SIGN UP FOR FREE TODAY</h3>
                            <p style={style.leadSmall}>It’s Free to signup to our basic plan. However if you choose to opt for one of our paid plans, you can cancel at anytime.</p>
                        </div>
                    </div>

                    <Plans planSelected={(id) => this.handlePlanSelect(id)}/>

                </div>
            </div>

        );
    }
}



export default Home;
