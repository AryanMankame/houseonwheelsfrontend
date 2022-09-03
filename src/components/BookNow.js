import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
let a = 0;
mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJ5YW42NzIwMDIiLCJhIjoiY2w2dHF4NThiMWRxcTNmbW1wMjloZHdlcyJ9.qJfe1mlh5Q-ycAw4bQgL-A";
export default function BookNow() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapmarker = useRef(0);
  const [lng, setLng] = useState(77.4126);
  const [lat, setLat] = useState(23.2599);
  const [zoom, setZoom] = useState(9);
  const [datefrom, setdatefrom] = useState(null);
  const [dateto, setdateto] = useState(null);
  const datemap = useRef([0,31,60,91,121,152,182,213,243,274,304,335]);
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
      <label to="dateinfo">From : </label>
      <input
        id="dateinfo"
        type="date"
        onChange={() => {
          let a = document.getElementById("dateinfo");
          setdatefrom(
            Number(a.value.substr(8, 2)) +
              datemap.current[Number(a.value.substr(5, 2)) - 1]
          );
            console.log(a.value);
        }}
      ></input>
      <br />
      <label to="noofdays">To : </label>
      <input
        id="noofdays"
        type="date"
        onChange={() => {
          let a = document.getElementById("noofdays");
          setdateto(
            Number(a.value.substr(8, 2)) +
              datemap.current[Number(a.value.substr(5, 2)) - 1]
          );
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
      </div>
      <button id = "confirmbtn">CONFIRM</button>
    </div>
  );
}
