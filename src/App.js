import logo from './logo.svg';
import './App.css';
import HomePage from './screens/homepage/HomePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <HomePage/>
      </Router>
    </div>
  );
}

export default App;
