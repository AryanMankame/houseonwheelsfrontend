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
      <h1>About</h1>
      <Left>
        <div
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center" 
        className = "question">What is house on wheels ?</div>
        <div 
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "answer">An Integrated vehicle which provides accomodation and facilitates travel to places during any time of the day and during all climatic conditions.</div>
        <div 
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "question">Why should I rent a house on wheels?</div>
        <div 
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "answer">It provides you the accessibility to reach any destination you want without having the need to book any cab or taxi and allowing travel even during any climatic condition.</div>
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
          <img src = "https://media.zigcdn.com/media/photogallery/2013/Feb/004_300x225.jpg" alt = "image"></img>
        </div>
      </Left>
      <Right>
        <div data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        <img src = "https://5.imimg.com/data5/YC/CL/MY-42504456/recreation-vehicle-500x500.jpg" alt = "caravaan image"></img>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className = "question">How to rent a house on wheels?</div>
        <div 
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
        <Link to ="/book" ><button id = "bookNow">BOOK NOW</button></Link>
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
  height:100vh;
  display:flex;
  flex-direction:row;
  button{
    cursor:pointer;
    font-family: 'Helvetica Neue'
  }
`;
const Left = styled.div`
  width:50wv;
  display:flex;
  flex-direction:column;
  margin-top:auto;
  margin-bottom:auto;
  margin-left:3pc;
  align-items:flex-start;
  padding-right:3pc;
  padding-top:7pc;
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
  img{
    width:30vw;
    height:43vh;
  }
`;
const Right = styled.div`
  width:50vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
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
  z-index:-1;
  .slider{
    z-index:4;
    height:100vh;
    img{
      height:100vh;
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
