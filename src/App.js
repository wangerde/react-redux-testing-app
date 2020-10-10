import React, {useState} from 'react';
import CakeContainer from './components/CakeContainer/CakeContainer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import './App.css';
// import './asyncActions';
import './myOwnWayAsync';

function App() {
  const [count, changeCount] = useState(6);
  const [color, changeColor] = useState('blue');

  const BUY_CAKE = "BUY_CAKE";
  const BUY_ICECREAM = "BUY_ICECREAM";
  // const createStore = redux.createStore;
  const reduxLogger = require('redux-logger');
  const logger = reduxLogger.createLogger();
  const initialCakeState = {
    numberOfCakes: 10
  }

  const initialIcrecreamState = {
    numberOfIcecream: 20
  }

  // function buyCake() {
  //   return {
  //     type: "BUY_CAKE",
  //     info: "First redux action"
  //   }
  // }

  // function buyIcecream() {
  //   return {
  //     type: "BUY_ICECREAM",
  //     info: "Icecream action creator"
  //   }
  // }

  const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
      case BUY_CAKE: return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      };

      default: return state;
    }
  }

  const icecreamReducer = (state = initialIcrecreamState, action) => {
    switch(action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1
      };

      default: return state;
    }
  }

  const rootReducer = combineReducers({
    cake: CakeReducer,
    icecream: icecreamReducer
  })

  const store = createStore(rootReducer, applyMiddleware(logger));


  // console.log('initial state', store.getState());  
  // store.dispatch(buyCake());
  // store.dispatch(buyCake());
  // store.dispatch(buyIcecream());
  // store.subscribe(()=> console.log('update store', store.getState()));
  // store.dispatch(buyIcecream());
  


  function minusHandler(){
    changeCount((pre) => {
      return pre-1;
    })
  }

  function plusHandler(){
    changeCount((pre) => {
      return pre +1;
    })

    changeColor(() => {
      return 'yellow';
    })
  }
  return(
    <div>
      <div className="section">
        {/* React Hooks */}
        <button className="button" onClick={minusHandler}>-</button>
        <span>{count}</span>
        <span>{color}</span>
        <button className="button" onClick={plusHandler}>+</button>
      </div>

      <div className="section">
        {/* React Redux connect */}
        <CakeContainer />
      </div>

      <div className="section">
       
      </div>

        
    </div>
  )
}
export default App;
