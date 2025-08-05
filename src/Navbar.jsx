import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>


<nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand bitcount-prop-single-uniquifier  text-white" to="/">
          PHILOSOPHY
        </NavLink>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                {["Lifestyle", "Health", "Family", "Management", "Travel", "Work"].map((item, i) => (
                  <li key={i}>
                    <NavLink className="dropdown-item" to="/Category">
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/Video">
                    Video Post
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/Audio">
                    Audio Post
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/Gallery">
                    Gallery Post
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/Standard">
                    Standard Post
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Style">
                Styles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Aboutus">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <a href="https://www.instagram.com/jaivardhan7773_/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-white fs-5"></i>
            </a>
            <a href="https://github.com/Jaivardhan7773" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github text-white fs-5"></i>
            </a>
            <a href="https://www.linkedin.com/in/jaivardhan7773" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-white fs-5"></i>
            </a>
            <a href="mailto:jaivardhansinghrathore17@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope text-white fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>




      {/* Carousel starts */}





      {/* corousel ends here */}
    </>

  )
}

export default Navbar;