import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";
import './ToDoList.css';

const Todos = () => {
  const [todos, setTodos] = useState();
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
    
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <div className="container mb-3">
     <button className="buttonLogout" onClick={handleClick}>Logout</button>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 21).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
         
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Todos;
