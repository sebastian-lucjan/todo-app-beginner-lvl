import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleDeleteTask={props.handleDeleteTask}
      handleChangeTaskStatus={props.handleChangeTaskStatus}
    />
  ));

  return (
    <>
      <div className="active">
        <div>Zadania do zrobienia</div>
        {tasks}
      </div>
      <div className="done">
        <div>Zadania zrobione</div>
      </div>
    </>
  );
};

export default TaskList;
