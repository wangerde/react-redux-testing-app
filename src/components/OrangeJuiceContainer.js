import React from 'react';
import { buyOrangeJuice } from '../redux';
import { connect } from 'react-redux';

function OrangeJuiceContainer(props) {
    return (
        <div>
            <h2>Number Of Orange Juice: {props.orangeJuiceNumber}</h2>            
            <button className='button' onClick={props.buyOrangeJuice}>Buy Orange Juice</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {orangeJuiceNumber: state.orangeJuice.orangeJuiceNumber}
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyOrangeJuice: () => dispatch(buyOrangeJuice())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrangeJuiceContainer);