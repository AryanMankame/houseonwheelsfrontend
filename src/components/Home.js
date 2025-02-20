import React from 'react'
import Navbar from "./Navbar.js";
import Features from "./Features.js";
import Contact from "./Contact.js";
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import BookNow from "./BookNow";
import AOS from 'aos';
import {Link} from 'react-router-dom';
import 'aos/dist/aos.css';
AOS.init();
function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <ImageSlider>
      <Navbar className = "navbar"/>
      <Carousel className = "slider" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img1Enhanced.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img2Enhanced.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/28/96/c4/2896c404e371db7b1535e400b54d50fa.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Info id = "about">
      <div className='about-head'>
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span>U</span>
          <span>S</span>
      </div>
      {/* <img id = "info-res" src = "https://5.imimg.com/data5/YC/CL/MY-42504456/recreation-vehicle-500x500.jpg" alt = "caravaan image"></img>  */}
      <Left id='left'>
       
        <div
        data-aos="fade-right"
        data-aos-offset="-100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        >
          {/* <img src = "https://media.zigcdn.com/media/photogallery/2013/Feb/004_300x225.jpg" alt = "image"></img> */}
          <img src = "home-car1.jpg" alt = "image"></img>
        </div>
        <div data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        {/* <img src = "https://5.imimg.com/data5/YC/CL/MY-42504456/recreation-vehicle-500x500.jpg" alt = "caravaan image"></img> */}
          <img id = "about-img2" src = "home-car2.jpeg" alt = "image"></img>
        </div>
      </Left>
      <Right>
      <div id = "q1"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center" 
        className = "question">What is house on wheels ?</div>
        <div id = "ans1"
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "answer">An Integrated vehicle which provides accomodation and facilitates travel to places during any time of the day and during all climatic conditions.</div>
        <div id = "q2"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "question">Why should I rent a house on wheels?</div>
        <div id = "ans2"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "answer">It provides you the accessibility to reach any destination you want without having the need to book any cab or taxi and allowing travel even during any climatic condition.</div>
        <div id = "q3"
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "question">How to rent a house on wheels?</div>
        <div id = "ans3"
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "answer">Simply click on the book now button and choose the location and duration you want and it will be delievered to the desired location.</div>
        <div id = "bookButtons">
        <Link to ="/list" ><button id = "bookNow">BOOK NOW</button></Link>
        <button id = "knowMore">KNOW MORE</button>
        </div>
      </Right>
    </Info>
    <Features />
    <Contact id = "contact"/>
    </ImageSlider>
  )
}
const Info = styled.div`
h1{
  text-align:center;
  padding-top:40vh;
  background-color:red;
  color:white;
}
  .about-head {
    display : flex;
    flex-direction: column;
    height: 100%;
    width: 10vw;
    background-color: red;
    align-items: center;
    justify-content: center;
    color: white; 
    font-weight: bold;
  }
  .about-head > span {
    margin-bottom : 5px; font-size:42px
  }
  // .about-head > p {
  //   margin-bottom: 4rem;
  // }
  height:100vh;
  display:flex;
  flex-direction:row;
  button{
    cursor:pointer;
    font-family: 'Helvetica Neue'
  }
  #info-res{
    display:none;
  }
  @media (max-width:500px){
    display: none;
    // display:flex;
    // flex-direction:row;
    overflow-x:hidden;
    #q1,#ans1,#q2,#ans2,#q3,#ans3{
      // text-align:center;
      padding:0px;
      margin-left:6vw;
    }
    .about-head{
      display: none;
    }
    h1{
      display:none;
    }
    #info-res{
      display:fixed !important;
      height:30vh;
      width:100vw;
    }
    #bookButtons{
      margin-bottom:20px;
      background-color:pink;
      width: 90vw;
    }
    #about {
      display: none;
    }
    // width:80% !important;
    // display:none;
  }
`;
const Left = styled.div`
  @media (max-width:500px){
    // h1{
    //   display:none;
    // }
    margin:0px;
    display: none;
    width: 20vw;
  }
  width:40vw;
  display:flex;
  flex-direction:column;
  margin-left:3pc;
  align-items:flex-start;
  justify-content:center;
  img{
    width:30vw;
    height:40vh;
    margin-bottom: 10px;
  }
`;
const Right = styled.div`
  @media (max-width:500px){
    // #q3,#ans3{
    //   display:none;
    // }
    width:100vw;
    .answer {
      background-color:green;
      width:90vw;
    }
    #knowMore {
      width: 100vw;
    }
    #q1,#q2,#q3{
      display:flex;
      width: 100%;
      flex-direction:column;
      // align-items:flex-start !important;
      // justify-content:center !important;
      margin-left: 10px;
    }
  }
  width:30vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-right:4pc;
  img{
    margin-top:3pc;
    margin-right:2pc;
    width:25pc;
    height:50vh;
  }
  .question{
    align-self:flex-start;
    font-weight:bold;
    font-size:24px;
    margin-bottom:1pc;
  }
  .answer{
    margin-bottom:2pc;
    margin-right:3pc;
  }
  #bookNow{
    background: linear-gradient(140.74deg, #31B5DE 22.49%, rgba(31, 230, 218, 0) 252.65%);
    color: #201141;
    height:3pc;
    border-radius:3pc;
    width:10pc;
    margin:1pc;
    &:hover{
      transform:scale(1.1);
    }
  }
  #knowMore{
    height:3pc;
    width:10pc;
    margin:1pc;
    border-radius:3pc;
    border:3px solid #201141;
    &:hover{
      transform:scale(1.1);
    }
  }
  #bookButtons{
    margin-right:auto;
    display:flex;
    flex-direction:row;
  }
  
`;
const ImageSlider = styled.div`
  @media (max-width:500px){
    .slider{
      // display:none;
      height:50vh !important;
      img{
        height:50vh !important;
        width:100vw !important;
        object-fit:cover;
      }
    }
    overflow-x:hidden;
    overflow-y:hidden;
    // height:50vh;
  }
  z-index:-1;
  .slider{
    width:100vw;
    z-index:4;
    height:100vh;
    img{
      height:100vh;
      width:100% !important;
      object-fit:cover;
    }
  }
  .carousel-control-next-icon,.carousel-control-prev-icon{
    border-radius:100%;
    background-color:grey;
    border:2px solid white;
    font-size:40px;
    &:hover{
      transition:all .5s;
      transform:scale(1.2);
    }
  }
`;
export default Home;
