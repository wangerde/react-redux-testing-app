import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cake: {props.numberOfCakes}</h2>
            <input 
                className="input" 
                type='text' 
                value={number} 
                required 
                onChange={e=>setNumber(e.target.value)} 
            />
            <br />
            <button className="button" onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
