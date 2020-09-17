import React from 'react';
import '../App.css';
import {Fragment} from "react";
//import {Link} from "react-router-dom";
import {BrowserView, AndroidView, IOSView} from "react-device-detect";
import {Button} from "@material-ui/core";

function Home() {
  return (
    <Fragment className="Home">
      
        <center><h1 style = {{color: "#ffffff"}}>Zoom(జూమ్)</h1></center><br/>

        <center>
            <AndroidView>
                <Button variant = "contained" href = "https://play.google.com/store/apps/details?id=us.zoom.videomeetings">
                    Download from Google Play (డౌన్‌లోడ్)
                </Button>
            </AndroidView>

            <BrowserView>
                <Button variant = "contained" target = "blank" href = "https://zoom.us/support/download">
                    Download for Windows(డౌన్‌లోడ్)
                </Button>
            </BrowserView>

            <IOSView>
                <Button variant = "contained" target = "blank" href = "https://apps.apple.com/us/app/id546505307">
                    Download from App Store(డౌన్‌లోడ్)
                </Button>
            </IOSView>
        </center>


    </Fragment>
  );
}

export default Home;
