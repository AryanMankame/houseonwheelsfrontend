import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import { useEffect,useState } from 'react';
import getCaravan from '../actions/getData.mjs'
import { useNavigate } from 'react-router-dom';
function Listing() {
  const [data,setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const f = async () => {
        const res = await getCaravan();
        setdata(res);
    }
    f();
  },[]);
  return (
    <Page>
        <Navbar />
        <div id = "container">
            {data.map(item => <Cards>
                <img id = "caravan-img" src={item.img} alt="" />
                <div id = "data">
                    <div className="name">{item.name}</div>
                    <div className="info">
                        <div className="info-data">
                            <div>{item.range} mi</div>
                            <div>Range (EPA est.)</div>
                        </div>
                        <div className="info-data">
                            <div>Sleeps</div>
                            <div>{item.sleep}</div>
                        </div>
                        <div className="info-data">
                            <div>Seating</div>
                            <div>{item.seat}</div>
                        </div>
                        <div className="info-data">
                            <div>Price</div>
                            <div>{item.price}/day</div>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button id = "book-now" onClick={() => {
                            localStorage.setItem('name',item.name);
                            localStorage.setItem('price',item.price);
                            localStorage.setItem('imgselected',item.img);
                            navigate('/book');
                            }
                        } onClcik>Book Now</button>
                        <button id = "know-more">Know More</button>
                    </div>
                </div>
            </Cards>)}
        </div>
    </Page>
  )
}
const Page = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    background-color: rgba(248,252,248,0.9);
    #nav{
        height: 10vh;
    }
    #items{
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content:space-around;
        align-items:center;
        margin-top:5vh;
    }
    #logo{
        margin-right:4vw;
    }
    #logo > img{
        height: 60px; width: 60px;
    }
    #headers{
        width: 60vw;
        display:flex;
        flex-direction: row;
        div{
            margin-right: 2vw;
        }
        button{
            margin-left:auto;
        }
        align-items: center;
        margin-right: 2vw;
    }
    #bottom-block{
        display: block; position: absolute;
        width:100vw;
        height:15vh;
        bottom:0;
        background-color:black;
    }
`;
const Cards = styled.div`
    height: 100vh; width: 100vw;
    background-color:lightblue;
    font-family: 'Fira Mono';
    img{
        height: 100vh; width: 100vw;
        position:relative;
        filter: brightness(80%);
    }
    .name{
        font-size:32px; font-weight:bold;
    }
    #data{
        height:100vh; width:100vw;
        z-index:10;
        position:relative;
        bottom : 100vh;
        color:white;
        display: flex; flex-direction:column;
        justify-content:flex-end;
        align-items:center;
        padding-bottom:10vh;
    }
    .info{
        display:flex; flex-direction:row;
        margin-top:60vh;
        font-size:18px;
        font-weight:medium;
    }
    .info-data{
        margin-right:5vw;
    }
    .info-data > div {
        padding-bottom:2vh;
    }
    button{
        height:6vh; width:20vw;
        margin-right:2vw; margin-top:1vh;
        border-radius:5px;
    }
    #know-more{
        background-color:transparent;
        color:white;
        border:2px solid white;
        &:hover{
            background-color:white;
            color:black;
        }
    }
    @media (max-width: 500px){
        img{
            width: 200vw;
        }
        .info-data{
            margin-right: 2vw;
            font-size:15px;
        }
        .info{
            margin-top:40vh;
        }
        .btn-div{
            display: flex; flex-direction: column;
        }
        button{
            width:80vw;
        }
    }
`;
export default Listing