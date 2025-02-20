import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
function Contact() {
  const navigate = useNavigate();
  return (
    <Body id = "contact">
    <div id = "upper">
        <div id = "overlap">
            <div id = "left">
                <h2>Looking for a wonderful travel experience?</h2>
                <h4>We can provide a wonderful travel experience</h4>
            </div>
            <div id = "right">
                <button id="explore" onClick={() => {
                    navigate('/list')
                }}>EXPLORE &#x2192;</button>
            </div>
        </div>
    </div>
    <div id = "lower">
        <div id = "first">
            <div id = "logoImg">
                <img src = "https://cdn-icons-png.flaticon.com/128/1113/1113375.png?ga=GA1.2.58926140.1653147197" alt = "logo"></img>
                <div style={{marginTop:"10px",fontSize: 24}}>H.O.W</div>
            </div>
            <div className='first-how-desc'>
                We Rent a HouseOnWheels which has a load of facilities.You can book one and it wil get dilevered at your desired location.
            </div>
            <div class = "detaildoit" id = "location">
                <img src = "https://cdn-icons-png.flaticon.com/512/1255/1255406.png" alt = "pin"></img>
                <div className="f16-m12">Mumbai,Maharashtra,India</div>
            </div>
            <div class = "detaildoit" id = "phone">
                <div>&#128222;</div>
                <div className='f16-m12'>+917387159818</div>
            </div>
            <div class = "detaildoit">
                <img src = "https://cdn-icons-png.flaticon.com/512/732/732200.png" alt='image'></img>
                <div className='f16-m12'>aryan672002@gmail.com</div>
            </div>
            <div id = "logos" class = "detaildoit">
                <img src = "https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt = "linkedin"></img>
                <img src = "https://cdn-icons-png.flaticon.com/512/174/174855.png" alt = "instagram"></img>
                <img src = "twitter.svg" alt="twitter"></img>
            </div>
        </div>
        <div id = "second">
            <div class = "title">Company</div>
            <div>About</div>
            <div>Blog</div>
            <div>All Products</div>
            <div>Locations Map</div>
            <div>FAQ</div>
            <div>Contact us</div>
        </div>
        <div id = "third">
            <div class = "title">Services</div>
            <div>Order tracking</div>
            <div>Wish List</div>
            <div>Login</div>
            <div>My account</div>
            <div>Terms & Conditions</div>
            <div>Promotional Offers</div>
        </div>
        <div id = "four">
            <div class = "title">Customer Care</div>
            <div>Login</div>
            <div>My account</div>
            <div>Wish List</div>
            <div>Order tracking</div>
            <div>FAQ</div>
            <div>Contact us</div>
        </div>
    </div> 
    </Body>
  )
}
const Body = styled.div`
    height:100vh;
    width:100vw;
    font-size:18px;
    #upper{
        height:20vh;
        background-color:hsl(192, 24%, 96%);
        #overlap{
            @media (max-width:500px){
                height:10vh;
                transform:translate(-20px,9pc);
                width:90vw !important;
                #left{
                    font-size:16px;
                    margin-left:5vw !important;

                }
                #right{
                    button{
                        width:10vw;
                    }
                }
            }
            z-index:10;
            transform:translateY(5pc);
            display:flex;
            flex-direction:row;
            margin-left:3pc;
            margin-right:3pc;
            height:8pc;
            font-family:Arial;
            #left{
                margin-left:5pc;
                display:flex;
                flex-direction:row;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                color:white;
                h2{
                    font-size:1.5pc;
                    font-weight:bold;
                    margin-left:1pc;
                }
                h4{
                    font-size:1pc;
                }
                @media (max-width:500px){ 
                    h2,h4{
                        font-size:12px !important;
                        width:40vw;
                    }
                    h4{
                        margin-left:3vw !important;
                    }
                    margin-left:1vw !important;
                }
            }
            #right{
                width:40vw;
                display:flex:
                flex-direction:row;
                align-items:center;
                justify-content: center;
                margin-top:5px;
                button{
                    width:15pc;
                    height:3pc;
                    margin-left:20vw;
                    margin-top:2pc;
                }
                @media (max-width:500px) {
                    button{
                        width:30vw;
                        transform:translate(-55px,-10px);
                    }
                }
            }
            background: linear-gradient(to right, #b24592, #f15f79);
        }

    }
    #lower{
        z-index:2;
        height:80vh;
        width:100vw;
        .first-how-desc {
            font-size: 14px;
        }
        .f16-m12 {
            font-size: 16px;
            margin-top: 12px;
        }
        display:flex;
        // padding-left:10vw;
        flex-direction:row;
        justify-content: center;
        padding-top:25vh;
        color:white;
        background-color:hsl(227, 29%, 13%);
        font-family:Arial;
        #second,#third,#four{
            margin-left:5pc;
            display:flex;
            flex-direction:column;
            div{
                margin-bottom:1pc;
            }
        }
        .title{
            font-size:25px;
            font-weight:20px;
        }
        .detaildoit{
            display:flex;
            flex-direction:row;
            div{
                margin-left:3px;
                margin-top:8px;
            }
        }
        #logos{
            display:flex;
            img{
                margin-top:5px;
                margin-right:8px;
            }
        }
        #first{
            img{
                margin-top:10px;
                height:25px;
                width:25px;
            }
            width:15vw;
            #logoImg{
                display:flex;
                flex-direction:row;
                img{
                    height:3pc;
                    width:3pc;
                }
                div{
                    padding:.5pc;
                }
            }
        }
        @media (max-width:500px){
            font-size:14px;
            display:flex;
            flex-direction : row;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0px; margin: 0px;
            align-items: center;
            .title{
                font-size: 20px !important;
            }
            #first,#second,#third,#four {
                width: 40vw;
                padding: 0px; margin: 10px;
            }
            #first {
                font-size: 12px !important;
            }
            .first-how-desc {
                font-size: 14px;
            }
            .f16-m12 {
                font-size: 12px;
                margin-top: 12px;
            }
        }
        @media (min-width:500px){
            #lower{
                padding-left:10vw;
            }
        }
    }
`;
export default Contact;