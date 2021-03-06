import React from 'react';
import '../App.css';

const Todo = ({todos,todo, setTodos, text}) => {
    const deleteHandler = (e) => {
        setTodos(todos.filter(element => element.id !== todo.id))
        console.log(todo)
    }
    const completeHandler = () =>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return {...item,completed : !item.completed}
            }
            return item
        }
        ));
    }
    return(
        <div className="todo">  
            <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
            <button onClick= {completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick = {deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>

    );
}

export default Todo;    