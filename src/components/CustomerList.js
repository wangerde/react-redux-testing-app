import React from 'react';
import { connect } from 'react-redux';

function CustomerList(props) {
    const users = props.customer.map(user => {
        return <h4>{user}</h4>
    
    })

    return (
        <div>
            <h2>Customer List:</h2>
            <h4>{users}</h4>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer.user
    }
}

export default connect(mapStateToProps)(CustomerList);
