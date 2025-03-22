import React, { useState } from "react";
import { Link } from "react-scroll";
import "./../styles/navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <h1 className="logo">MyPortfolio</h1>
      <ul className="nav-menu">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("about")}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("experience")}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("skills")}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("contact")}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
