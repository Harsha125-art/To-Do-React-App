import { useState } from "react";
import "./App.css";
import InputContainer from "./components/input-container";
import TableContainer from "./components/app-container";

function App() {
  const [InputVal, setInputVal] = useState("");
  const [ToDo, setToDo] = useState([]);

  function writeToDo(e) {
    setInputVal(e.target.value);
  }

  function addToDo() {
    if (InputVal.trim() !== "") {
      setToDo((prevToDo) => [...prevToDo, InputVal]);
      setInputVal("");
    }
  }
 function delToDo(todoIndex){
    setToDo((prevToDo)=>prevToDo.filter((prevToDo,prevtoDoIndex)=>{
        return prevtoDoIndex!=todoIndex
    }))
 }
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer InputVal={InputVal} writeToDo={writeToDo} addToDo={addToDo} />
      <TableContainer todo={ToDo} delToDo={delToDo} />
    </main>
  );
}

export default App;
