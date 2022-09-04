import React from "react";
import styled from "styled-components";
import db from "./Firebase";
import { collection , getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
const BookedRides = () => {
    const collectionref = collection(db,"users");
    const [userdata,setuserdata] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const data = await getDocs(collectionref);
            const mp = data.map(doc => {
                return (<div>"hello"</div>)
            })
            setuserdata(mp);
            // setuserdata(data.docs.map((doc) => (
            //     // <Page>
            //     // <div onClick = {() => {
            //     // console.log(userdata);
            //     // }} id="car">
            //     // <div class="rect">
            //     // {
            //     // {...doc.data()}
            //     // }
            //     // </div>
            //     // <div class="front">
            //     // <div class="window"></div>
            //     // <div class="f_hood"></div>
            //     // </div>
            //     // <div class="tyres"></div>
            //     // <div class="f_tyres"></div>
            //     // <div class="ff_tyres"></div>
            //     // <div class="hood"></div>
            //     // </div>
            //     // </Page>
            //     <div>
            //        "hello"
            //        {console.log(doc.data())}
            //     </div>
            //     )))
        }
        getData();
    },[]);
    return (
        {userdata}
    );
}
export default BookedRides;
const Page = styled.div`
body{
    width:500px;
    margin:100px auto;
    background:#ccc;
  }
  #car {
    position:relative;  
    width:212px;
  }
  .rect {
    width:150px;
    height:100px;
    background:rgb(255,255,234);  
    position:relative;  
  }
  .front {
    position:absolute;
    top:25px;
    right:0;
    background:black;
    width:60px;
    height:70px;
    border-radius:0 55px 0 0;
  }
  .hood {
    width:225px;
    background:black;
    height:7px;
    position:absolute;
    left:-3px;
    bottom:-2px;
    border-radius:3px;
  }
  .window{
    position:absolute;
    background:white;
    width:42px;
    height:15px;
    border-radius:0 15px 0 0;
    padding-bottom:10px;
    top:18px;
    left:7px;
  }
  .f_hood {
    position:absolute;
    background:black;
    width:68px;
    height:30px;
    border-radius:0 5px 5px 0;
    bottom:-7px;
  }
  .tyres,.f_tyres,.ff_tyres {
    width:30px;
    height:30px;
    background:black;
    border-radius:30px;
    position:absolute;
    border:2px solid #ccc;
    bottom:-15px;
    z-index:1;
  }
  .tyres{left:10px;}
  .f_tyres {
     left:100px;
  }
  .ff_tyres {
    right:10px;
  }
  .tyres::after,
  .f_tyres::after,
  .ff_tyres::after {
    content:"";
    background:#fff;
    width:20px;
    height:20px;
    border-radius:10px;
    top:5px;left:5px;
    position:absolute;
  }
  
  
`;