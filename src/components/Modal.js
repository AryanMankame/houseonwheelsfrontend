import React,{useState,useEffect} from 'react'
import styled  from 'styled-components';
function Modal(props) {
  const [dis,setdis] = useState("loading");
  useEffect(() => {
    setTimeout(() => {
        setdis(localStorage.getItem("response"));
    },2000);
  },[]);
  return (
    <Page>
        <Main>
            { dis === "loading" ? <>
            <div>
            <div class="load-wrapp">
            <div class="load-1">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            </div>
            </div>
            </> : 
            <>
            { dis === "failed" ? 
            <>
            <img src = "https://cdn-icons-png.flaticon.com/128/1828/1828843.png"></img>
            <div style = {{color:"red"}}>Sorry! your ride has not been booked!</div>
            <button onClick = {(e) =>{
                e.preventDefault(); props.close();
            }}>OK</button>
            </>
            : 
            <>
            <img src = "https://cdn-icons-png.flaticon.com/128/9709/9709605.png"></img>
            <div style={{color:"green"}}>Congratulations! your ride has been booked!</div>
            <button onClick = {() =>{
                props.close();
            }}>OK</button>
            </>}
            </>
            }
        </Main>
    </Page>
  )
}
const Page = styled.div`
    height : 100vh;
    width : 100vw;
    display:flex; flex-direction : row;
    align-items : center; justify-content : center;
`
const Main = styled.div`
    height: 40vh; width: 40vw;
    @media (max-width:500px){
      width: 80vw;
      button{
        width: 20vw !important;
      }
      div{
        margin-left:5vw;
      }
    }
    border: 2px solid black;
    border-radius:10px;
    box-shadow: 0 0 10px;
    display: flex; flex-direction: column;
    align-items : center; justify-content : center;
    font-weight:bold;
    color:green;
    font-size:17px;
    img{
        height:10vh; width:10vh;
        margin-bottom:2vh;
    }
    button{
        margin-top: 2vh;
        width:6vw;
        height:5vh;
        border-radius:10px;
        background-color:lightgreen;
        &:hover{
            transform:scale(1.1);
        }
    }
    .load-wrapp {
        float: left;
        width: 100px;
        height: 100px;
        margin: 0 10px 10px 0;
        padding: 20px 20px 20px;
        border-radius: 5px;
        text-align: center;
      }
      
      .load-wrapp p {
        padding: 0 0 20px;
      }
      .load-wrapp:last-child {
        margin-right: 0;
      }
      
      .line {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background-color: #4b9cdb;
      }
      .load-1 .line:nth-last-child(1) {
        animation: loadingA 1.5s 1s infinite;
      }
      .load-1 .line:nth-last-child(2) {
        animation: loadingA 1.5s 0.5s infinite;
      }
      .load-1 .line:nth-last-child(3) {
        animation: loadingA 1.5s 0s infinite;
      }

      @keyframes loadingA {
        0 {
          height: 15px;
        }
        50% {
          height: 35px;
        }
        100% {
          height: 15px;
        }
      }
`
export default Modal