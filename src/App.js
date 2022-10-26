import './App.css';
import SignInForm from "./components/SignInForm";
import SignUpForm from './components/SignUpForm';
import Home from './components/Home.js';
import BookNow from './components/BookNow.js';
import BookedRides from "./components/BookedRides.js";
import './components/Login.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/" element = {<SignInForm />} />
      <Route path = "/sign-in" element = {<SignUpForm />} />
      <Route path = "/home" element = {<Home />} />
      <Route path = "/book" element = {<BookNow />} />
      <Route path = "/rides" element = {<BookedRides />} />
      </Routes>
    </Router>
  );
}

export default App;
