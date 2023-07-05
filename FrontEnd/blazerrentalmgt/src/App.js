
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
