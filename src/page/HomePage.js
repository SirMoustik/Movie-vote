import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <Link to={"/category/0"}>
        <div className="card">
          <img src="Carton 1.png" alt="Card 1" />
        </div>
      </Link>
      <Link to={"/category/1"}>
        <div className="card">
          <img src="Carton 2.png" alt="Card 2" />
        </div>
      </Link>
      <Link to={"/category/2"}>
        <div className="card">
          <img src="Carton 3.png" alt="Card 3" />
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
