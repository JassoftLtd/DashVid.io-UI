import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {

    priceCard: {
        borderRadius: "2px",
        border: "none",
        boxShadow: "0 3px 14px 0 rgba(116,116,116,0.19)",
        maxWidth: "300px",
        height: "100%",
        margin: "30px 15px",
    },

    priceCardHr: {
        borderTop: "1px solid #E9E9E9",
        width: "100%"
    },

    btnLg: {
        fontSize: "16px",
        letterSpacing: "1px",
        padding: "18px 30px",
    },

    btnPrimary: {
        backgroundColor: "#38CE97",
        border: "1px solid #38CE97",
        borderRadius: "3px"
    },

    priceCardBtn: {
        borderRadius: "0px 0px 2px 2px",
        cursor: "pointer"
    },

    priceCardCurrent: {
        borderRadius: "0px 0px 2px 2px",
        cursor: "default"
    },

    priceIcon: {
        marginTop: "40px",
    },

    priceLabel: {
        fontSize: "40px",
        fontWeight: 100,
        display: "block",
        margin: "30px auto 15px",
        color: "#17a2b8"
    },

    priceLabelPremium: {
        fontSize: "40px",
        fontWeight: 100,
        display: "block",
        margin: "30px auto 15px",
        color: "#38CE97"
    },

    planType: {
        fontSize: "12px",
        textTransform: "uppercase",
        color: "#343434"
    },

    planPrice: {
        fontSize: "35px",
        fontWeight: 800,
        margin: "10px auto",
        display: "block",
        textTransform: "uppercase"
    },

    planPriceNegativeHighlight: {
        fontSize: "18px",
    },

    planFeatures: {
        listStyle: "none",
        fontSize: "15px",
        fontWeight: 300,
        padding: "0 20px",
        textAlign: "left",
        color: "#666"
    },

    planFeature: {
        margin: "16px auto"
    },
}

export default class Plan extends Component {

    handlePlanSelect (id) {
        this.props.planSelected(id)
    }

    render() {
        const {id, name, price, features, currentPlan} = this.props;

        let action

        if (price > 0) {
            action = (
                <span data-qa={"plans-btn-" + id}
                      className="btn btn-info btn-block btn-lg"
                      style={{...style.btnLg, ...style.priceCardBtn, ...style.btnPrimary}}
                      onClick={() => this.handlePlanSelect(id)}
                >Buy Now</span>
            );
        } else {
            action = (
                <span data-qa={"plans-btn-" + id}
                      className="btn btn-info btn-block btn-lg"
                      style={{...style.btnLg, ...style.priceCardBtn}}
                      onClick={() => this.handlePlanSelect(id)}
                >Signup Now</span>
            );
        }

        if (currentPlan) {
            action = (
                <span
                    className="btn btn-info btn-block btn-lg"
                    style={Object.assign(style.btnLg, style.priceCardBtn, style.priceCardCurrent)}>Current Plan</span>
            )
        }

        let priceDisplay = price > 0 ? (<span style={style.planPrice}><span style={style.planPriceNegativeHighlight}>£</span>{price}<span style={style.planPriceNegativeHighlight}>/Month</span></span>) : (<span style={style.planPrice}>Free</span>)

        // 10<span style={style.planPriceNegativeHighlight}>/ Month</span>

        let featuresDisplay = features.map(function (feature, i) {
            return (<li style={style.planFeature} key={i}>{feature}</li>)
        })

        return (
            <div className="card text-center" style={style.priceCard}>
                <img style={style.priceIcon} src="images/icon-basic.svg" alt="" />
                <h4 style={price > 0 ? style.priceLabelPremium : style.priceLabel}>{name}</h4>
                {/*<span style={style.planType}>Individual</span>*/}
                {priceDisplay}
                <hr style={style.priceCardHr} />
                <ul style={style.planFeatures}>
                    {featuresDisplay}
                </ul>

                {action}
            </div>
        )
    }
}

Plan.propTypes = {
  planSelected: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  currentPlan: PropTypes.bool.isRequired,
};