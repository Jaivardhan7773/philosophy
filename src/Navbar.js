import React from "react";
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    return(
        <>



<nav class="navbar navbar-expand-lg bg-dark sticky-lg-top text-light">
  <div class="container">
  <div class="row  container justify-content-between text-center navbar-collapse" id="navbarNavDropdown ">
    <div class="col">
    <img src="https://img.icons8.com/?size=48&id=118497&format=png" class="hidenavimg" style={{height:"30px"}}/>
      <img src="https://img.icons8.com/?size=48&id=13963&format=png" class="hidenavimg"  style={{height:"30px"}}/>
      <img src="https://img.icons8.com/?size=48&id=32323&format=png" class="hidenavimg"  style={{height:"30px"}}/>
      <img src="https://img.icons8.com/?size=48&id=63676&format=png" class="hidenavimg"  style={{height:"30px"}}/>
    </div>
    <div class="col"><h1 class="philosophylogo">PHILOSOPHY</h1></div>
    <div class="col hidenavimg "><input type="search" class="bg-transparent searchicon" placeholder="SEARCH"/></div>
  </div>
  </div>
</nav>



<nav className="navbar navbar-expand-lg bg-dark text-light sticky-lg-top">
  <div className="container-fluid">
    <button
      className="togbtn navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse  justify-content-center "
      id="navbarNavDropdown"
    >
      <ul className="navbar-nav text-center ">
        <li className="nav-item">
          <NavLink
            className="nav-link active text-light"
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle text-light"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </a>
          <ul className="dropdown-menu bg-dark">
            <li>
              <NavLink className="dropdown-item text-light navdrop" to="/Category">
                Lifestyle
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light  navdrop" to="/Category">
                Health
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light  navdrop" to="/Category">
                Family
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light  navdrop" to="/Category">
                Management
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light  navdrop" to="/Category">
                Travel
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light  navdrop" to="/Category">
                Work
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-light"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Blog
          </a>
          <ul className="dropdown-menu bg-dark">
            <li>
              <NavLink className="dropdown-item text-light navdrop" to="/Vedio">
                Vedio Post
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light navdrop" to="/Audio">
              Audio Post
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light navdrop" to="/Gallery">
                Gallery Post
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item text-light navdrop" to="/Standard">
                Standard Post
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/Style">
            Styles
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/Aboutus">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>




{/* Carousel starts */}





    {/* corousel ends here */}
        </>
        
    )
}

export default Navbar;