import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { delRide, getRides } from '../actions/addRides.mjs'
import Navbar from './Navbar';
import cloneDeep from 'lodash/cloneDeep';
function MyRides() {
  const [rideinfo,setrideinfo] = useState([]);
  useEffect(() => {
    const f = async () => {
      const res = await getRides(localStorage.getItem('email'));
      setrideinfo(res.rides);
    }
    f();
  },[])
  return (
    <Page>
        <Navbar />
        <Main>
        {/* <button onClick = {(e) => {
          e.preventDefault();
          console.log(rideinfo);
        }}>sd</button>
        <button onClick = {(e) => {
          e.preventDefault();
          setrideinfo(rides => { let temp = [...rides]; temp.pop(); return temp; });
        }}>rm</button> */}
          {
            rideinfo.length === 0 ? <div>You have no rides booked yet!!!</div> 
             :
              rideinfo.map((item,ind) =>
                      <Cards key = {ind}>
                        <img src={item.img} alt=""></img>
                        <div className="info">
                          <div className="name">{item.name}</div>
                          <div className="otherinfo">
                            <div>
                              <div>Date :</div>
                              <div>From : {new Date(item.datefrom).getDate()}-{new Date(item.datefrom).getMonth()}-{new Date(item.datefrom).getFullYear()}</div>
                              <div>To : {new Date(item.dateto).getDate()}-{new Date(item.dateto).getMonth()}-{new Date(item.dateto).getFullYear()}</div>
                            </div>
                            <div>
                              <div>Time :</div>
                              <div>{new Date(item.time).getHours()}:{new Date(item.time).getMinutes()}:{new Date(item.time).getMilliseconds()}</div>
                            </div>
                            <div>
                              <div>Cost :</div>
                              <div>{item.cost}</div>
                            </div>
                          </div>
                          <button onClick={() => {
                            setrideinfo((res) => {
                              var rides = [...res];
                              let temp = rides[0];
                              rides[0] = rides[ind];
                              rides[ind] = temp;
                              rides.shift();
                              delRide(localStorage.getItem('email'),rides);
                              return rides;
                            })
                          }}>Cancel</button>
                        </div>
                      </Cards>
                    )
          }
        </Main>
    </Page>
  )
}
const Page = styled.div`
    min-height:100vh; 
    width:100vw;
`;
const Cards = styled.div`
    height: 40vh;
    width: 70vw;
    display:flex; flex-direction: row;
    background-color: lightgrey;
    padding:1pc;
    border-radius:15px;
    border:2px solid black;
    margin-bottom: 2vh;
    img{
      height:100%; width:40%;
      border-radius:15px;
    }
    .name{
      margin-left: 10%;
      margin-top:4%; font-size:20px; font-weight:bold;  font-family:'Comic Sans MS'
    }
    .info{
      width: 60%;
    }
    .otherinfo{
      width: 100;
      // background-color:orange;
      display: flex; flex-direction:row;
      justify-content: space-around;
      margin-top:10%;
      margin-bottom:5%;
      font-size:18px; font-family:'Comic Sans MS';
    }
    button{
      width:70px; height:30px;
      border-radius:5px; background-color:red;
      margin-left:10%;
    }
    @media (max-width:500px){
      width:80vw;
      height:50vh;
      flex-direction:column;
      .info{
        width: 100%;
      }
      img{
        width:90%;
        margin-left:4vw; margin-top:1vh;
      }
      .name{
        display: flex; flex-direction: row;
        justify-content: center;
        margin-right:6vw;
      }
      button{
        margin-left:25vw;
      }
    }
`;
const Main = styled.div`
  height : 100%; width : 100%;
  padding-top:15vh;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
`;
export default MyRides