
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login/login';
import Register from './register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>

      <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
