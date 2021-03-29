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
      {
        id: 4,
        text: 'odebrać list ze skrzynki',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: 'zrobić kurs internetowy',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: 'napisać apkę',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  handleDeleteTask = (id) => {
    console.log('delete');

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);

    // tasks.splice(index, 1);

    // this.setState(() => {
    //   return { tasks: tasks };
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);

    this.setState(() => {
      return { tasks };
    });
  };

  handleChangeTaskStatus = (id) => {
    console.log('status');

    const tasks = Array.from(this.state.tasks);
    const mappedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      return task;
    });
    this.setState(() => {
      return { tasks: mappedTasks };
    });
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
