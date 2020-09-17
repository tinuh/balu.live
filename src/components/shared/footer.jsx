import React from 'react';
import '../../App.css';

function Footer(props) {

  return (
    <div className="footer-div">
      <footer className= "py-4 bg-dark text-white-50 fixed-bottom">
        <div className="container text-center">
          <small className="footer-text-dark">Copyright &copy; Designed By <a className="link" href = "https://tinu.tech" target = "blank">Tinu Vanapamula</a></small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;