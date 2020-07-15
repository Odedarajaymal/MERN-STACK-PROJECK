import React, { Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from '../actions'




class Payment extends Component {
    render() {
        return (
            <div>
                <StripeCheckout
                name='Emaily'
                amount={500}
                token={token =>this.props.handletoken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                
                >
                    <button className="btn">ADD CREDIT</button>
                    </StripeCheckout>
            </div>
        )
    }
}


export default connect(null,actions)(Payment)