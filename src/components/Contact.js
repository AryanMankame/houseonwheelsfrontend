import React from 'react'
import styled from "styled-components"

function Contact() {
  return (
    <Body id = "contact">
    <div id = "upper">
        <div id = "overlap">
            <div id = "left">
                <h2>Looking for a wonderful travel experience?</h2>
                <h4>We can provide a wonderful travel experience</h4>
            </div>
            <div id = "right">
                <button id="explore">EXPLORE &#x2192;</button>
            </div>
        </div>
    </div>
    <div id = "lower">
        <div id = "first">
            <div id = "logoImg">
                <img src = "https://cdn-icons-png.flaticon.com/128/1113/1113375.png?ga=GA1.2.58926140.1653147197" alt = "logo"></img>
                <div>H.O.W</div>
            </div>
            <div>
                We Rent a HouseOnWheels which has a load of facilities.You can book one and it wil get dilevered at your desired location.
            </div>
            <div class = "detaildoit" id = "location">
                <img src = "https://cdn-icons-png.flaticon.com/512/1255/1255406.png" alt = "pin"></img>
                <div>Mumbai,Maharashtra,India</div>
            </div>
            <div class = "detaildoit" id = "phone">
                <div>&#128222;</div>
                <div>+917387159818</div>
            </div>
            <div class = "detaildoit">
                <div>&#128231;</div>
                <div>aryan672002@gmail.com</div>
            </div>
            <div class = "detaildoit">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94lss-M8YBbptTJJ89KHyahVOWkp-uBsDGhUxr6smkA&s" alt = "linkedin"></img>
                <img src = "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1662292952~exp=1662293552~hmac=5dd9f8fc72a58fc9b2556481e782180bcfbd9d29992644baae1cd9f4478962bb" alt = "instagram"></img>
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
            }
            #right{
                width:40vw;
                display:flex:
                flex-direction:row;
                button{
                    width:15pc;
                    height:3pc;
                    margin-left:20vw;
                    margin-top:2pc;
                }
            }
            background: linear-gradient(to right, #b24592, #f15f79);
        }
        .detaildoit{
            display:flex;
            flex-direction:row;
        }
    }
    #lower{
        z-index:2;
        height:80vh;
        width:100vw;
        display:flex;
        padding:3pc;
        flex-direction:row;
        padding-top:10pc;
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
        #first{
            img{
                height:2pc;
                width:2pc;
            }
            width:25vw;
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
    }
`;
export default Contact;