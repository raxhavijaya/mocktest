import React, { useRef } from "react";
import ToDoListPage from "../ToDoListSection/ToDoListPage";
import "./LoginPage.css";
import { useNavigate, Navigate } from "react-router-dom";
import Todos from "../ToDoListSection/Todos";

function LoginPage() {
  const navigate = useNavigate();
  const password = useRef();

  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (password.current.value === "1234") {
      localStorage.setItem("passwordData", "12345");
    } else if (password.current.value === "1233") {
      localStorage.setItem("passwordData", "1233");
    } else if (password.current.value === "1232") {
      localStorage.setItem("passwordData", "1232");
    }
  };

  return (
    <div>
      {getPassword ? (
        <Todos />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="containerLogin">
            <h2 className="welcome">WELCOME</h2>
            <input className="input" type="password" ref={password} placeholder="Password" />
            <button className="button">Login</button>
          </div>
        </form>
      )}
    </div>
  );
}
export default LoginPage;
