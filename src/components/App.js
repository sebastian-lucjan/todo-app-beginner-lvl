import './App.css';
import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać wreszcie w Wiedźmina',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'odebrać paczkę z inpostu',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'zrobić zakupy',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'posprzątać garaż',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  handleDeleteTask = (id) => {
    console.log('delete');
  };

  handleChangeTaskStatus = (id) => {
    console.log('status');
  };

  render() {
    return (
      <div className="App">
        TO-DO-APP
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          handleDeleteTask={this.handleDeleteTask}
          handleChangeTaskStatus={this.handleChangeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
