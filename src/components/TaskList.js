import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const activeTasks = props.tasks.filter((task) => task.active);
  const doneTasks = props.tasks.filter((task) => !task.active);

  const tasksFromArr = (arr) => {
    return arr.map((task) => (
      <Task
        key={task.id}
        task={task}
        handleDeleteTask={props.handleDeleteTask}
        handleChangeTaskStatus={props.handleChangeTaskStatus}
      />
    ));
  };

  // const tasks = props.tasks.map((task) => (
  //   <Task
  //     key={task.id}
  //     task={task}
  //     handleDeleteTask={props.handleDeleteTask}
  //     handleChangeTaskStatus={props.handleChangeTaskStatus}
  //   />
  // ));

  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        {activeTasks.length ? tasksFromArr(activeTasks) : <p>brak zadań</p>}
      </div>
      <div className="done">
        <h3>
          Zadania zrobione <span>({doneTasks.length})</span>
        </h3>
        {doneTasks.length > 5 && (
          <span style={{ fontSize: 10, color: '#f00' }}>
            wyświetlonych jest jedynie 5 ostatnich elementów
          </span>
        )}
        {tasksFromArr(doneTasks).slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
