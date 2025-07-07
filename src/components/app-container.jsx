 
import React from 'react';
import ToDo from './ToDo';

function TableContainer({ todo ,delToDo}) {
  return (
    <div className="container">
      {todo.map((task, index) => (
        <ToDo key={index} todo={task} index={index}  delToDo={delToDo}/>
      ))}
    </div>
  );
}

export default TableContainer;
