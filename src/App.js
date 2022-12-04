import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginSection/LoginPage";
import ToDoListPage from "./components/ToDoListSection/ToDoListPage";
import Todos from "./components/ToDoListSection/Todos";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/todos" element={<Todos/>}/>
      <Route path="/todos/:id" element={<ToDoListPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
