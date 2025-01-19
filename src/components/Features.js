import React from 'react'
import styled from "styled-components";
function Features() {
  return (
    <Body id = "features">
      <div id = "smalltag"><h3>Our Features</h3></div>
      <div id = "tag"><h1>Aminities Provided</h1></div>
      <Cards>
        <Card>
            <img src = "https://png.pngtree.com/png-clipart/20210121/ourmid/pngtree-3d-improvement-section-bed-furniture-png-image_2770889.jpg" alt = "image"></img>
            <h3>King Size Bed</h3>
        </Card>
        <Card>
            <img src = "https://www.knaus.com/fileadmin/media/2021-2022/wohnmobile/van-i/content/interieur/kta-knaus-2021-2022-vani-interieur-0413.jpg" alt = "image"></img>
            <h3>Smart Kitchen</h3>
        </Card>
        <Card>
            <img src = "https://www.mouser.com/blog/Portals/11/Voice%20Control%20Home.png" alt = "image"></img>
            <h3>Voice Controlled Appliances</h3>
        </Card>
        <Card>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPElUZ6XOQFt8hzHptJ9iWZG2Sl1_smDJFQdyyF0ioqK3L-wRVbnmFFSYSDx_ezP3f1WM&usqp=CAU" alt = "image"></img>
            <h3>Library Area</h3>
        </Card>
        <Card>
            <img src = "https://images.mansionglobal.com/im-223780?width=1299&height=731" alt = "image"></img>
            <h3>Comfy Couch</h3>
        </Card>
        <Card>
            <img src = "https://i.pinimg.com/736x/68/f8/e1/68f8e1b49dbf3b1d070ec8f7f4530331.jpg" alt = "image"></img>
            <h3>Washroom</h3>
        </Card>
        <Card>
            <img src = "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/09/eco-friendly-lifestyle-1536846426.jpeg" alt = "image"></img>
            <h3>Eco-Friendly</h3>
        </Card>
        <Card>
            <img src = "https://cdn.pixabay.com/photo/2013/07/13/11/34/wifi-158401_640.png" alt = "image"></img>
            <h3>Free Wifi</h3>
        </Card>
      </Cards>
    </Body>
  )
}
const Body = styled.div`
    width:100vw;
    padding-top:2pc;
    background-color:hsl(192, 24%, 96%);
    #smalltag,#tag{
        display:flex;
        flex-direction:row;
        justify-content:center;
    }
    #smalltag{
        h3{
        font-size:1pc;
        }
        border:2px solid orange;
        width:10vw;
        margin-left:auto;
        margin-right:auto;
        padding-top:5px;
        margin-bottom:5px;
        border-radius:1pc;
        color:hsl(9, 100%, 62%);
        background:hsla(9, 100%, 62%, 0.1);
        @media (max-width: 500px) {
            width:30vw;
        }
    }
`;
const Cards = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-left:5vw;
    @media (max-width:700px){
        flex-direction:column;
        & > div{
            width:90%;
            height:50vw;
            justify-content:center;
        }
    }
`;
const Card = styled.div`
    display:flex;
    flex-direction:column;
    height:35vh;
    width:20vw;
    border-radius:1pc;
    font-family:Arial,Helvetica,sans-serif;
    background-color:white;
    margin:1pc;
    &:hover{
        background-color:hsl(9, 100%, 62%);
        transform:scale(1.1);
    }
    img{
        height:7pc;
        width:7pc;
        margin-left:auto;
        margin-right:auto;
        border:2px solid orange;
        margin-top:auto;
        // margin-bottom:auto;
        border-radius:10pc;
    }
    h3{
        font-size:1.2pc;
        font-family: 'Klee One';
        text-align:center;
        margin-top:1pc;
        margin-bottom:auto;
    }
`;
export default Features
