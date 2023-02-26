import React,{useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import './Login.css';
import {useNavigate} from "react-router-dom";
function SignInForm() {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [message,setmessage] = useState("");
  const navigate = useNavigate();
  const data = {
    email,
    password
  }
  const checkuser = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("https://houseonwheelsbackend.temporaryemail3.repl.co/auth/login",{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        if(res["resp"] === "success"){
          navigate("/home");
        }
        setmessage(res["resp"]);
      })
  }
  return (
    <div className="appAside" >
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
            {message === "failure" ? <h3 style={{color:"white"}}>*User doesn't exist</h3> : <></>}
            <div className="formCenter">
    <form className="formFields">
      <div className="formField">
        <label className="formFieldLabel" htmlFor="email">
          E-Mail Address
        </label>
        <input
          type="email"
          id="email"
          className="formFieldInput"
          placeholder="Enter your email"
          name="email"
          onChange = {(e) => {
            setemail(e.target.value);
          }}
        />
      </div>

      <div className="formField">
        <label className="formFieldLabel" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="formFieldInput"
          placeholder="Enter your password"
          name="password"
          onChange = {(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>

      <div className="formField">
        <button className="formFieldButton" onClick = {checkuser}>Sign In</button>{" "}
        <Link to="/sign-in" className="formFieldLink">
          Create an account
        </Link>
      </div>
    </form>
  </div>
          </div>
        </div>
  )
}

export default SignInForm;