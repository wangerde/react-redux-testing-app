import React, {useState} from 'react';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  )
}
export default App;
