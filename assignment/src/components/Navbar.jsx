import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand">Math Magicians</h1>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Calculator">Calculator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Quote">Quote</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
