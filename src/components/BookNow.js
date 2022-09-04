import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import db from "./Firebase"; //we are importting the db which acts a reference to the database which we are currently using in our firebase application
import {collection,getDocs,addDoc} from "firebase/firestore" // The data inside the firebase firestore is nuch more similar to mongoDB where there are collection of objects and each object has their own attributes.
// The objects here are called as docs.
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
  const [datef,setdatef] = useState(0);
  const [datet,setdatet] = useState(0);
  const datemap = useRef([0,31,60,91,121,152,182,213,243,274,304,335]);
  const addUser = async () => {
    const collecionref = collection(db,"users");
    await addDoc(collecionref,{email:"abc@gmail.com",password:"abc",enddate:datet,startdata:datef,latitude:lat,longitude:lng,cost:(dateto-datefrom)*5000});
  }
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
  });
  useEffect(() => {
    if (!map.current || a > 0) return; // wait for map to initialize
    console.log(a);
    a++;
    mapmarker.current = new mapboxgl.Marker({
      color: "green"
    })
      .setLngLat([lng, lat])
      .addTo(map.current);
    map.current.on("move", () => {
      const ln = map.current.getCenter().lng.toFixed(4);
      const la = map.current.getCenter().lat.toFixed(4);
      setLng(ln);
      setLat(la);
      setZoom(map.current.getZoom().toFixed(2));
      mapmarker.current.setLngLat([ln, la]).addTo(map.current);
    });
  }, []);
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <div id = "input-data">
      <form onSubmit = {(e) => {
        e.preventDefault();
        addUser();
      }}>
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
      <div>
        Congratulations! You have booked your H.O.W for {dateto - datefrom}
      </div>
      <br />
      <div>Total Cost     {(dateto-datefrom)*5000}</div>
      <br />
      <input type="submit" id = "confirmbtn" value = "CONFIRM"/>
      </form>
      </div>
    </div>
  );
}
