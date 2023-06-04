
import { Router } from 'express';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
