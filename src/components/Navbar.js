import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class Navbar extends PureComponent {
  render() {
    return (
      <div id="navbar">
        <Link to={"/"}>
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
