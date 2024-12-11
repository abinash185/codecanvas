import "./Navbar.css";
import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData } from "../../utils/Constant";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = useRef();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="navigation" ref={navRef}>
      <div className="brand">
        <Link
          to="/"
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          <img src={navbarData.brandLogo} alt="Vistaar Logo" />
        </Link>
      </div>
      <nav>
        <div className="nav-mobile">
          <a
            id="navbar-toggle"
            href="#!"
            onClick={handleToggleNav}
            className={isNavOpen ? "active" : ""}
          >
            <span></span>
          </a>
        </div>
        <ul className={` nav-list ${isNavOpen ? "py-[2vh]" : "hidden"}`}>
          {navbarData.links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className={link.link === "#" ? "comingSoonClass" : ""}
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
