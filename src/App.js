import './App.css';
import Home from './components/Home.js';
import BookNow from './components/BookNow.js';
import BookedRides from "./components/BookedRides.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/book" element = {<BookNow />} />
      <Route path = "/rides" element = {<BookedRides />} />
      </Routes>
    </Router>
  );
}

export default App;
