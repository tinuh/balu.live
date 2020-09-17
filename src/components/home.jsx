import React from 'react';
import '../App.css';
import {Fragment} from "react";
//import {Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import First from "../img/carousel/aaaa-first.jpg";
import Second from "../img/carousel/second.jpg";

function Home() {
  return (
    <Fragment className="Home">
      
        <center><h1 style = {{color: "#ffffff"}}>Balaji Vanapamula (బాలాజీ వనపాముల)</h1></center><br/>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={First}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Second}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>


    </Fragment>
  );
}

export default Home;
