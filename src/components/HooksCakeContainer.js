import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const dispatchBuyCake = useDispatch();

    return (
        <div>
            <h2>Number of Cakes: {numberOfCakes}</h2>
            <button className="button" onClick={()=>dispatchBuyCake(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;