import {Link } from "react-router-dom";
import './Footer.css'
export default function Footer() {
  return (
    <footer>
      <Link to="/" className="footer-elements">
        Home
      </Link>
      |
      <Link to="/" className="footer-elements">
        About Dudhwa Park
      </Link>
      |
      <Link to="/" className="footer-elements">
        About KATARNIGHAT
      </Link>
      |
      <Link to="/" className="footer-elements">
        Deer of Dudhwa
      </Link>
      |
      <Link to="/" className="footer-elements">
        Birds of Dudhwa
      </Link>
      |
      <Link to="/" className="footer-elements">
        Butterflies of Dudhwa
      </Link>
      |
      <Link to="/" className="footer-elements">
        Rhinoceros of Dudhwa
      </Link>
      |
      <Link to="/" className="footer-elements">
        Reptiles of Dudhwa
      </Link>
      |
      <Link to="/" className="footer-elements">
        Faqs KATARNIAGHAT
      </Link>
      |
      <Link to="/" className="footer-elements">
        How to reach KATARNIAGHAT
      </Link>
      |
      <Link to="/" className="footer-elements">
        Project Tiger
      </Link>
      |
      <Link to="/" className="footer-elements">
        Do's & Dont's
      </Link>
      |
      <Link to="/ContactUs" className="footer-elements">
        Contact Us
      </Link>
      |
      <Link to="/" className="footer-elements">
        SITE MAP
      </Link>
      |
      <br />© 2011-2015 DudhwaNationalPark.in. All rights reserved.
    </footer>
  );
}
