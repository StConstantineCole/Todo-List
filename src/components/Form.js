import React from "react";



const Form = ({setInputText, inputText, todos, setTodos, setStatus}) =>{

const inputTextHandler = (e) =>{
   console.log(e.target.value);
  setInputText(e.target.value);
};

//This function iterates items of the Todo array 
const submittTodoHandler =(e)=> {
  //prevents the page from default refreshing by default
  e.preventDefault();
  setTodos([
    // Spread operator: "..." spreads out an array into individual elements
    ...todos, 
    {text: inputText, 
      completed: false, 
      id: Math.random() *1000},
  ]);
  setInputText('');
};

//updates the setStatus state to whatever is selected 
const statusHandler= (e) =>{
  setStatus(e.target.value);
}


   return(
<form>
      <input value={inputText}  onChange={inputTextHandler} 
      type="text" className="todo-input" />
      <button onClick={submittTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
   ); 
}

export default Form;