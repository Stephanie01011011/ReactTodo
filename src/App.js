
import './App.css';
import { useState } from 'react';
import { Todo } from './Todo';

function App() {
    const [list, setList] = useState([{id: 1, name: "Write Book Report"}, {id: 2, name: "Clean The House"}, {id: 3, name: "Go To The Spa"} ]);
    const [task, setTask] = useState("");
    
    const addTask = () => {
      //this means its an array filled with everything in the list already, plus the new task
        const todo = {
          id: list.length === 0 ? 1 : list[list.length-1].id + 1,
          name: task
        }
        setList([...list, todo]);
        const input = document.getElementById('input');
        input.value = "";
    }

    const deleteTask = (id) => {
      //filter function, will compare the item selected to each item in the list arraY, and if they match 
      //it returns flase which gets rid of the item.
      const newList = list.filter((item) => {
        return item.id !== id;
      })
      setList(newList)
    };

  return (
    <div className="App">
      <h1 id='title'>To Do List</h1>
     <div className='addTask'>
      
      <input type="text" name="" id="input" onChange={(event)=>{
        setTask(event.target.value);
        
      }}/>
      <button onClick={addTask} id='addbtn'>Add Task</button>
     </div>
     <div className="list">
      {list.map((item) => {
        return (
         <Todo item={item} deleteTask={deleteTask}/>

        )
      })}
     </div>
    </div>
  );
}

export default App;
