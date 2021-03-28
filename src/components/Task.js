import React from 'react';

const Task = (props) => {
  const { text, date, id } = props.task;
  return (
    <div>
      <p>
        <strong>{text}</strong> - do <span>{date} </span>
        <button onClick={() => props.handleChangeTaskStatus(id)}>Zostało zrobione</button>
        <button onClick={() => props.handleDeleteTask(id)}>X</button>
      </p>
    </div>
  );
};

export default Task;

// handleDeleteTask={this.handleDeleteTask}
//           handleChangeTaskStatus={this.handleChangeTaskStatus}
