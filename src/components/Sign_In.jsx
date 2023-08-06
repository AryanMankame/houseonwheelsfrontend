import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
import './sign_in.css';
import {useNavigate} from "react-router-dom";
import {auth,provider,signInWithPopup,createUserWithEmailAndPassword} from './Firebase.mjs';
import { checkEmail,checkPassword } from '../actions/checkValid';
import { signInWithEmailAndPassword } from 'firebase/auth';
function Sign_In() {
  const [currPage,setcurrPage] = useState("login");
  const navigate = useNavigate();
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [message,setmessage] = useState("");
  const handleAuthGoogle = () => {
    signInWithPopup(auth,provider).then(res => {
        localStorage.setItem("token",res.user.accessToken);
        localStorage.setItem("email",res.user.email);
        navigate('/home');
    }).catch(err => console.log("error occured",err));
  }
  return (
    <Page>
        <div id = "back-img"></div>
        <MainPage>
        <Login>
        <section class="login-container">
        <article class="form-container">
        <div class="intro">
        <h1>Welcome Back</h1>
        <p>Welcome Back, Please Enter Your details</p>
        </div>

        <form onsubmit="return false;" class="form">
        <div>{message}</div>
        <div class="email-input">
        <span class="material-icons-round icon-size"> </span>
        <span id="seperator"></span>
        <div class="input-container">
            <p class="sub-title">Email Address</p>
            <input type="email" name="usermail" id="email" onChange={(e) => setemail(e.target.value)} />
        </div>
        </div>
        <div class="email-input">
        <span class="material-icons-round icon-size">  </span>
        <span id="seperator"></span>
        <div class="input-container">
            <p class="sub-title">Password</p>
            <input type="password" name="userpass" id="password" onChange={(e) => setpassword(e.target.value)}/>
        </div>
        </div>

        {currPage === "register" ? <div class="email-input">
        <span class="material-icons-round icon-size"> </span>
        <span id="seperator"></span>
        <div class="input-container">
            <p class="sub-title">Name</p>
            <input type="email" name="usermail" id="email" />
        </div>
        </div> : <></>
        }
        {
            currPage === "login" ?
            <button id="submit" onClick={(e) => {
                e.preventDefault();
                if(!checkEmail(email)){
                    setmessage("The entered email address is not valid");
                }
                else if(!checkPassword(password)){
                    setmessage("password can't be less than 6 characters");
                }
                else{
                    signInWithEmailAndPassword(auth, email, password).then(res => {
                        localStorage.setItem('token',res.user.accessToken);
                        localStorage.setItem('email',res.user.email);
                        navigate('/home'); 
                    }).catch(err => setmessage("*User doesn't exist"));
                }

            }}>Continue</button>
            :
            <button id="submit" onClick={(e) => {
                e.preventDefault();
                if(!checkEmail(email)){
                    setmessage("The entered email address is not valid");
                }
                else if(!checkPassword(password)){
                    setmessage("password can't be less than 6 characters");
                }
                else{
                    createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                    setcurrPage('login');
                }

            }}>Continue</button>
        }
        </form>

        <article class="outro">
        <div class="ending">
        <p>Or Continue With</p>
        </div>

        <div class="socials">
        <p class="social-btn" href="" id="g-btn" onClick={handleAuthGoogle}><p>Google</p></p>
        <p class="social-btn" href="" id="a-btn"><p>Apple</p></p>
        <p class="social-btn" href="" id="fb-btn"><p>Facebook</p></p>
        </div>
        {currPage === "login" ? <div id = "register-title">Not Yet Registered ? <a href = "" onClick={(e) => {
            e.preventDefault();
            setcurrPage("register");
        }}>Register Now</a></div>
        : <></> }
        {currPage === "register" ? <div id = "register-title">Already Registered ? <a href = "" onClick={(e) => {
            e.preventDefault();
            setcurrPage("login");
        }}>Sign In</a></div>
        : <></>}   
        </article>
        </article>
        </section>
        </Login>
        </MainPage>
    </Page>
  )
}
const Page = styled.div`
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    #back-img{
        filter: blur(.5rem) brightness(70%);
        position: absolute;
        background-image: url('signback_en2.jpg');
        background-repeat: no-repeat;
        background-size: 300% 300%;
        height: 100%;
        width: 100%;
    }
`;
const MainPage = styled.div`
    height: 85vh;
    width: 70vw;
    z-index:3;
    border-radius:2pc;
    filter: brightness(100%) !important;
    background-image: url('signback_en2.jpg');
    background-repeat: no-repeat;
    background-size: 110% 120%;
    display:flex;
    flex-direction: row;
    box-shadow:10px 10px 10px;
    @media (max-width:500px){
        background-size: 500vw 130vh !important;
        height:100vh; width:100vw;
        border-radius:0px;
    }
`;
const Login = styled.div`
    height:78vh;
    width:50vw;
    background-color:transparent !important;
    // margin-right:20vw !important;
    padding-top:10vh !important;
    .intro{
        // color:rgba(255,255,255,1);
        color:black;
    }
    p{
        // color:rgba(255,255,255,0.8);
        color:black;
    }
    input{
        background-color:transparent;
    }
    #register-title{
        color:rgba(255,255,255,0.9);
        font-size:13px;
    }
    @media (max-width:500px){
        width:60vw !important;
        margin-left:30vw !important;
        .form-container{
            margin:100%;
        }
        #register-title{
            color:rgba(255,255,255,0.9);
            font-size:11px;
        }
    }
`;
export default Sign_In