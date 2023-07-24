import Home from "./component/Home";
import "./App.css"
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app-js-container">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          </Routes></Router>
    </div>
  );
}

export default App;


// external libraries
// npm i react-icons