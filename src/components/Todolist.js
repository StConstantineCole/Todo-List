import React from 'react';
import Todo from './Todo';

//This function renders out an unordered list by mapping  using the Todos component
const TodoList =({todos, setTodos, filteredTodos})=>{
  
  
    return(
      <div className="todo-container">
      <ul className="todo-list">
    
       {filteredTodos.map((todo) =>(

       <Todo 
       setTodos={setTodos} 
       todos={todos}
       key={todo.id} 
       todo={todo}    //each physical individual structure that the text is  
       text={todo.text}/>

       ))}

      </ul>
    </div>
    );
}
export default TodoList;