import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import './ToDoList.css';
const ToDoListPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick=()=>{
    localStorage.clear();
    navigate('/')
  }

  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
      const responseTodo = res.data;
      setTodoDetails(responseTodo);
    });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div className="container">
      {todoDetails ? (
        <div>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <p> {`ID: ${todoId}`} </p>
              <p> {`User: ${userId}`} </p>
              <p> {`Title: ${title}`} </p>
              <span className="badge bg-primary rounded-pill">
                <input class="form-check-input me-1" type="checkbox" checked={completed} />
              </span>
            </li>
          </ul>
          <button className="buttonLogout" onClick={handleClick}>Logout</button>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ToDoListPage;
