import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import Todolist from './components/Todolist';



function App() {
  //useState Hook, specifies an array with two items, an initial value and a function to change that value...
  //the initial value is passed by useState(Initial value)

const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setfilteredTodos] = useState([])

  //run once when the app starts
  useEffect(()=>{
    getLocalTodos();
    saveLocalTodos();
   
  }, []);

  useEffect(()=>{
    filterHandler();
  }, [todos, status]
  
  
  );

  const filterHandler= () =>{
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed ===true))
        break;
        case 'uncompleted':
          setfilteredTodos(todos.filter(todo => todo.completed ===false))
          break;
          default:
            setfilteredTodos(todos)
            break

    }
  };

  //save to local storage
  const saveLocalTodos =()=>{
     localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const getLocalTodos =()=>{
      if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else {
     // let todolocal = localStorage.getItem('todos', JSON.stringify(todos));
     let todolocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todolocal);
    }
    
  };
  
  return (
    <div className="App">
  <header>
  <h1>Cole's Todo List </h1>
  </header>

  <Form 
  inputText={inputText}
  todos={todos} 
  setTodos={setTodos} 
  setInputText={setInputText}
  //status={status}
  setStatus={setStatus}
  
  />

  <Todolist setTodos={setTodos} 
  todos={todos} 
  filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
