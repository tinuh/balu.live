import React from 'react';
import './App.css';
import {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Shared
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

//Components
import Home from "./components/home";
import Zoom from "./components/zoom";

function App() {
  return (
    <Fragment className="App">
      <Router>

        <Navbar />
        {/* Page Content routes */}
        <Switch>

          {/* All of the Different Routes */}
          <Route exact path = "/" component = {Home}/>
          <Route path = "/" component = {Zoom}/>

        </Switch>
        <Footer />
        
      </Router>
    </Fragment>
  );
}

export default App;
