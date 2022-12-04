import React from "react";
import { useNavigate } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const navigate = useNavigate();
  const { id, completed, title } = todo;

  return (
    <div className="container"
      
      onClick={() => navigate(`/todos/${id}`)}
    >
        <ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
  {title}
    <span className="badge bg-primary rounded-pill">
        <input class="form-check-input me-1" type="checkbox" checked={completed}/>
    </span>
    </li>
      
      </ul>
    </div>
  );
};

export default TodoCard;
