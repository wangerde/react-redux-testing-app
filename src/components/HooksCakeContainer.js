import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer(props) {
    const numberOfCakes = useSelector(state => state.numberOfCakes);
    const dispatch = useDispatch(); //buy cake through hooks
    return (
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button className='button' onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    );
}

export default HooksCakeContainer;
