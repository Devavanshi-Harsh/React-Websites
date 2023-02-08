import "./Header.css";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Accomodation from "../Accomodation/Accomodation";
import ContactUs from "../ContactUs/ContactUs";
import Group_Queries from "../GroupQueries/GroupQueries";
import Gypsy_Safari from "../GypsySafari/GypsySafari";
import History from "../History/History";
import Rules_Regulations from "../RulesRegulations/RulesRegulations";
import Tips_for_Visitors from "../TipsForVisitors/TipsForVisitors";

export default function Header() {
  return (
    <div>
      
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/History" className="nav-item">
          History
        </Link>
        <Link to="/Accomodation" className="nav-item">
          Accomodation
        </Link>
        <Link to="/Rules_Regulations" className="nav-item">
          Rules and Regulations
        </Link>
        <Link to="/Tips_for_Visitors" className="nav-item">
          Tips for Visitors
        </Link>
        <Link to="/Group_Queries" className="nav-item">
          Group Queries
        </Link>
        <Link to="/Gypsy_Safari" className="nav-item">
          Gypsy Safari
        </Link>
        <Link to="/ContactUs" className="nav-item">
          Contact Us
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/History" element={<History />} />
        <Route path="/Accomodation" element={<Accomodation />} />
        <Route path="/Rules_Regulations" element={<Rules_Regulations />} />
        <Route path="/Tips_for_Visitors" element={<Tips_for_Visitors />} />
        <Route path="/Group_Queries" element={<Group_Queries />} />
        <Route path="/Gypsy_Safari" element={<Gypsy_Safari />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
