import React from 'react';

//Todo component which passes an Js variable: Text, to be returned by a Jsx/html structure
const Todo = ({text, todo, todos, setTodos}) =>{
//Events

//deletes todo from todolist by filtering out the id
const deleteHandler =()=>{

setTodos(todos.filter((el)=>el.id !== todo.id));
};

//maps todo to todos and if a match is found the 
//complete property of that value is changed to from
//false to true

const completeHandler =()=>{
        setTodos(todos.map(item=>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
    );
}



return(
    <div className="todo">

        {/*using templalte strings to implelement a ternary operator */}
        <li className={`todo-item ${todo.completed ? "Complete" : '' }`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
            </button>
        <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
        </button>
    </div>
);

};
export default Todo; 