import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import db from "./Firebase"; //we are importting the db which acts a reference to the database which we are currently using in our firebase application
import { collection, getDocs, addDoc } from "firebase/firestore"; // The data inside the firebase firestore is nuch more similar to mongoDB where there are collection of objects and each object has their own attributes.
// The objects here are called as docs.
import styled from "styled-components";
let a = 0;
mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJ5YW42NzIwMDIiLCJhIjoiY2w2dHF4NThiMWRxcTNmbW1wMjloZHdlcyJ9.qJfe1mlh5Q-ycAw4bQgL-A";
export default function BookNow(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapmarker = useRef(0);
  const [lng, setLng] = useState(77.4126);
  const [lat, setLat] = useState(23.2599);
  const [zoom, setZoom] = useState(9);
  const [datefrom, setdatefrom] = useState(null);
  const [dateto, setdateto] = useState(null);
  const [datef, setdatef] = useState(0);
  const [datet, setdatet] = useState(0);
  const [suggest,setsuggest] = useState([]);
  const [loc,setloc] = useState("Antarctica");
  const datemap = useRef([
    0, 31, 60, 91, 121, 152, 182, 213, 243, 274, 304, 335,
  ]);
  //setting the marker at place location
  const setTheMarker = (props) => {
    console.log(props);
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${props}.json?limit=1&access_token=pk.eyJ1IjoiYXJ5YW42NzIwMDIiLCJhIjoiY2w2dHF4NThiMWRxcTNmbW1wMjloZHdlcyJ9.qJfe1mlh5Q-ycAw4bQgL-A`)
    .then((res) => res.json())
    .then((res) => {
      const pos = res?.features;
      setLng(pos[0]["center"][0]);
      setLat(pos[0]["center"][1]);
      setloc(props);
      // setTimeout(() => {
        
      // })
      const ln = pos[0]["center"][0]; const lt = pos[0]["center"][1];
      console.log(" ==> ",lng,lat);
    });
  }
  const addUser = async () => {
    const collecionref = collection(db, "users");
    await addDoc(collecionref, {
      email: "abc@gmail.com",
      password: "abc",
      enddate: datet,
      startdata: datef,
      latitude: lat,
      longitude: lng,
      cost: (dateto - datefrom) * 5000,
    });
  };
  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    mapmarker.current = new mapboxgl.Marker({
      color: "green",
    })
      .setLngLat([lng, lat])
      .addTo(map.current);
    map.current.on("move", () => {
      const ln = map.current.getCenter().lng.toFixed(4);
      const la = map.current.getCenter().lat.toFixed(4);
      console.log("la => ",la,"lng => ",ln);
      setLng(ln);
      setLat(la);
      setZoom(map.current.getZoom().toFixed(2));
      mapmarker.current.setLngLat([ln, la]).addTo(map.current);
    });
  },[loc]);
  // useEffect(() => {
  //   if (a > 0) {
  //     return; // wait for map to initialize
  //   }
  //   // console.log(a);
  //   a++;
  //   mapmarker.current = new mapboxgl.Marker({
  //     color: "green",
  //   })
  //     .setLngLat([lng, lat])
  //     .addTo(map.current);
  //   map.current.on("move", () => {
  //     const ln = map.current.getCenter().lng.toFixed(4);
  //     const la = map.current.getCenter().lat.toFixed(4);
  //     console.log("la => ",la,"lng => ",ln);
  //     setLng(ln);
  //     setLat(la);
  //     setZoom(map.current.getZoom().toFixed(2));
  //     mapmarker.current.setLngLat([ln, la]).addTo(map.current);
  //   });
  // },[map.current]);
  return (
    <div>
      <Page>
        <div ref={mapContainer} className="map-container" />
        <div id="input-data">
          <Head>
              <div id = "loclineleft"> <hr /> </div>
              <br />
              <div id = "locname">LOCATION</div>
              <div id = "loclineright"> <hr /> </div>
          </Head>
          <Search>
          <input placeholder = "Enter the location" onChange = {(event) => {
            setTimeout(() => {
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoiYXJ5YW42NzIwMDIiLCJhIjoiY2w2dHF4NThiMWRxcTNmbW1wMjloZHdlcyJ9.qJfe1mlh5Q-ycAw4bQgL-A&autocomplete=true`).then((res) => res.json()).then(res => {
              var temp = res?.features; temp = temp.map((item) => {
                return <div id = "autocomp" key = {item["place_name"]} onClick = {(event) => {
                  setTheMarker(item["place_name"]);
                  // setloc(item["place_name"]);
                }}>{item["place_name"]}</div>
              }); setsuggest(temp);
            });  
            },2000);
          }}></input>
          <div id = "dropdown">
            <div>{suggest}</div>
          </div>
          </Search>
          <Head>
              <div id = "loclineleft"> <hr /> </div>
              <br />
              <div id = "locname">BOOKING</div>
              <div id = "loclineright"> <hr /> </div>
          </Head>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addUser();
            }}
          >
            <label to="dateinfo">From : </label>
            <input
              required
              id="dateinfo"
              type="date"
              onChange={() => {
                let a = document.getElementById("dateinfo");
                setdatefrom(
                  Number(a.value.substr(8, 2)) +
                    datemap.current[Number(a.value.substr(5, 2)) - 1]
                );
                console.log(a.value);
                setdatef(a.value);
              }}
            ></input>
            <br />
            <label to="noofdays">To : </label>
            <input
              reqiured
              id="noofdays"
              type="date"
              onChange={() => {
                let a = document.getElementById("noofdays");
                setdateto(
                  Number(a.value.substr(8, 2)) +
                    datemap.current[Number(a.value.substr(5, 2)) - 1]
                );
                setdatet(a.value);
                console.log(a.value);
              }}
            ></input>
            <br />
            <br />
            <div id = "total">
            <div>Total: </div>
            <div id = "cost">{(dateto - datefrom) * 5000} &#x20B9;</div>
            </div>
            <br />
            <div id = "congrats">
              Congratulations! You have booked your H.O.W for{" "}
              {dateto - datefrom}
            </div>
            <br />
            <input type="submit" id="confirmbtn" value="CONFIRM" />
          </form>
        </div>
      </Page>
    </div>
  );
}
const Page = styled.div`
  display: flex;
  flex-direction: row;
  width:100vw;
  justify-content:center;
  label{
    margin-left:10%;
    font-weight:bold;
  }
`;
const Head = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  color:black;
  margin-top:4vh;
  #locname{
    display:flex;
    flex-direction:row;
    justify-content:center;
    color:green;
  }
  #loclineleft,#loclineright{
    width:30%;
  }
  #loclineleft{
    margin-left:10%;
  }
  #loclineright{
    margin-right:10%;
  }
`;
const Search = styled.div`
  margin-left:10%;
  input{
    width:80%;
    border:1px solid lightgreen;
    margin-top:4%;
  }
  #autocomp{
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  width:90%;
  }
  #autocomp:hover{
    cursor:pointer;
  }

`;
