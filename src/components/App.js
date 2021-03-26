import './App.css';
import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        TO-DO-APP
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default App;
