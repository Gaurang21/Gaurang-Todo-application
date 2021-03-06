import React from 'react';
import Todo from './Todo.js';
const TodoList = ({todos,setTodos,status, filteredTodos}) => {
    return(
    <div className="todo-container">
        <ul className="todo-list">
        {
        filteredTodos.map((todo) =>
        <Todo todos={todos} todo={todo} setTodos={setTodos} text={todo.text} key={todo.id}/>
        )
        }
        </ul>
        
    </div>
    );
}

export default TodoList;
