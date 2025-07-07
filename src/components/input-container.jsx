import React from "react";

function InputContainer({ InputVal, writeToDo, addToDo }) {
  return (
    <div className="input-container">
      <input type="text" value={InputVal} onChange={writeToDo} />
      <button onClick={addToDo}>+</button>
    </div>
  );
}

export default InputContainer;
