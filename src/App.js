import './App.css';
import SignInForm from "./components/SignInForm";
import SignUpForm from './components/SignUpForm';
import Home from './components/Home.js';
import BookNow from './components/BookNow.js';
import BookedRides from "./components/BookedRides.js";
import Sign_In from './components/Sign_In';
import './components/Login.css';
import MyRides from './components/MyRides.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import Listing from './components/Listing';
function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/" element = {<Sign_In />} />
      <Route path = "/sign-in" element = {<SignUpForm />} />
      <Route path = "/home" element = {<Home />} />
      <Route path = "/book" element = {<BookNow />} />
      <Route path = "/rides" element = {<BookedRides />} />
      <Route path = "/list" element = {<Listing />} />
      <Route path = "/my-rides" element = {<MyRides />} />
      </Routes>
    </Router>
  );
}

export default App;
