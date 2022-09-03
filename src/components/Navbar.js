import React from "react";
import styled from "styled-components";
import "./Navbar.css";
const Navbar = () => {
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
            <a onClick={() => {closeNav();}} href="#about">About</a>
            <a onClick={() => {closeNav();}} href="#features">Features</a>
            <a onClick={() => {closeNav();}} href="#contact">Book Now</a>
            <a onClick={() => {closeNav();}} href="#contact">Contact</a>
            </div>
            </div>
            <div>
            <img src = "https://cdn-icons-png.flaticon.com/128/1113/1113375.png?ga=GA1.2.58926140.1653147197"></img>
            </div>
            <span onClick={() => {console.log('pressed'); openNav();}}>&#9776;</span>
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
`;
export default Navbar;