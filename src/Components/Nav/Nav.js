import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <nav className="Nav">
      <h1>MyChallenge</h1>
      <div className="Nav-links">
        <div>Product</div>
        <div>Download</div>
        <div>Pricing</div>
      </div>
    </nav>
  );
}

export default Nav;
