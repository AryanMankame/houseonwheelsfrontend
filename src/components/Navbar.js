import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    const navigate = useNavigate();
    const openNav = () => {
        document.getElementById("myNav").style.height = "100%";
    }
    const closeNav= () => {
        document.getElementById("myNav").style.height = "0%";
    }
    return(
        <Body>
            <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" onClick={() => {closeNav();}}>&times;</a>
            <div class="overlay-content">
            <div className = "alink" onClick={() => {closeNav(); navigate('/home')}} >Home</div>
            <div className = "alink" onClick={() => {closeNav(); navigate('/book')}} >Book Now</div>
            <div className = "alink" onClick={() => {closeNav(); navigate('/list')}} >Cart</div>
            <div className = "alink" onClick={() => {closeNav(); navigate('/my-rides')}} >My Rides</div>
            </div>
            </div>
            <div>
            <img id = "logo-img" src = "https://cdn-icons-png.flaticon.com/128/1113/1113375.png?ga=GA1.2.58926140.1653147197"
            onClick={() => {navigate('/home')}}></img>
            </div>
            <span id = "nav-3bar" onClick={() => {console.log('pressed'); openNav();}}>&#9776;</span>
        </Body>
    );
}
const Body = styled.div`
    height:10vh;
    width:100vw;
    z-index:20;
    display:flex;
    align-items:center;
    position:fixed;
    justify-content:space-between;
    span{
        padding:5px;
        color:orange;
        margin-right:2vw;
    }
    img{
        margin-left:10px;
        margin-top:20px;
        width:80px;
        height:80px;
        
    }
    .alink{
        font-size:24px; color:white; font-family:Firacode Mono; margin-bottom:2vh;
        &:hover{
            cursor:pointer;
        }
    }
`;
export default Navbar;