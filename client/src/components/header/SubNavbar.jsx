import React from "react";
import "./Navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import subnav from "./subnav.jpg";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <div className="sub-nav">
      <div className="left">
        <a href="" className="left-item all">
          <MenuOutlinedIcon id="hamburger" /> All
        </a>
        <a href="" className="left-item">
          Best Sellers
        </a>
        <a href="">
          <Link to="/cellphones"> Mobile </Link>
        </a>
        <a href="" className="left-item">
          Customer Services
        </a>
        <a href="" className="left-item">
          Today's Deals
        </a>
        <a href="" className="left-item">
          <Link to="/fashion"> Fashion </Link>
        </a>
        <a href="" className="left-item">
          <Link to="/electronics"> Electronics </Link>
        </a>
        <a href="" className="left-item">
          <Link to="/appliances"> Appliances </Link>
        </a>
        <Link to="/beauty"> Beauty </Link>
      </div>

      <div className="right">
        <a href="" className="download">
          <img src={subnav} alt="Download App"></img>
        </a>
      </div>
    </div>
  );
};

export default SubNavbar;
