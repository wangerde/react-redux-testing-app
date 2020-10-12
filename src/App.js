import React, {useState} from 'react';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import OrangeJuiceContainer from './components/OrangeJuiceContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

import { Provider } from 'react-redux';
import store from './redux/store/store';
import './App.css';
import CustomerList from './components/CustomerList';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <NewCakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <OrangeJuiceContainer />
        <CustomerList />
      </div>
    </Provider>
  )
}
export default App;
