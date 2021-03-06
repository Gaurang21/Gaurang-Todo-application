import React, {useState, useEffect} from "react";
import './App.css';
import {Form} from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  //RUN ONCE - use empty array, it will run at the start
  useEffect(()=>{
    getTodos();
  },[])
  //states
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(movies);

  //handler
  const filterHandler = () =>{
    switch(status){
      case "completed":
        console.log("completed items"+todos.completed);
        setFilteredTodos(todos.filter(el => el.completed === true));
        
        break;
      case "Pending":
        console.log("Pending items"+todos.completed);
        setFilteredTodos(todos.filter(el=> el.completed === false));
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  const saveTodos =() =>{
  localStorage.setItem('todos',JSON.stringify(todos));
  //useEffect(function,array) - used to call a function everytime a state changes. Here it runs when todos and status gets updated.
  };
  const getTodos = () =>{
    if(localStorage.getItem('todos')===null)
    {
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      let localTodo = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodo);
    }
  };

  useEffect(()=>{
    filterHandler(); 
    saveTodos();
  },[todos,status])

  return (
    <div className="App">
      <header><h2>Gaurang's Todo List</h2></header>
      <Form inputText={inputText} setInputText={setInputText} setTodos = {setTodos} todos = {todos} setStatus={setStatus}/> <br></br>
      <TodoList todos={todos} setTodos={setTodos} status={status} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
