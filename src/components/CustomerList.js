import React from 'react';
import { connect } from 'react-redux';

function CustomerList(props) {
    return (
        <div>
            <h2>Customer Lists</h2>
            <h4>{props.customer}</h4>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer.user.join(', ')
    }
}

export default connect(mapStateToProps)(CustomerList);
