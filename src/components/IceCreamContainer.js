import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

const mapStateToProps = (state) => {
    return {
        iceCreamNumber: state.iceCream.iceCreamNumber
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice Cream: {props.iceCreamNumber}</h2>
            <button className="button" onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDisptachToProps)(IceCreamContainer);