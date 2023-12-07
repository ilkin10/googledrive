import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <b className="title">Welcome To Our Drive</b>
          <br></br>
        <Routes>
          <Route exact path="/"  element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
        

        </header>
      </div>
    </Router>
  );
}

export default App;
