import React, { Component } from 'react'
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className = "container">
          <div id= "task-container">
            <AddTask/>

            <Tasks/> 

          </div>
        </div>
      </Provider>
    )
  }
}


export default App;
