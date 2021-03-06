import React from 'react';
import '../App.css';
/*
function Form(){

}
*/
export const Form = (props) =>{
    const inputTextHandler = (e) =>{
        props.setInputText(e.target.value);
    };
    const submitHandler = (e) =>{
        e.preventDefault();
        props.setTodos([...props.todos, {text:props.inputText, completed:false, id: Math.random()*100}])
        props.setInputText("");
    };
    const statusHandler = (e) =>{
        console.log(e.target.value);
        props.setStatus(e.target.value);
    }
    return(
        <form>
            <input value={props.inputText} type="text" className="todo-input" onChange={inputTextHandler}></input>
            <button onClick= {submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
            <div class="select">
                <select onChange= {statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
        </form>
    );
}