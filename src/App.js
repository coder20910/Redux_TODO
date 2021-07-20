import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store';
import Todo from './Compnonets/Todo';

function App() {
  return (

    // 4
    <Provider store={store}> 
      <div className="App">
        <Todo></Todo>
      </div>
    </Provider>
      
  );
}

export default App;
