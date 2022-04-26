import React from "react";
import Link from "react-scroll/modules/components/Link";
import "./NavMenu.scss";

export default function NavMenu() {
  const scrollDuration = 800;
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <Link
            to="cta"
            className="start"
            smooth={true}
            duration={scrollDuration}
          >
            Start
          </Link>
        </li>
        <li>
          <Link to="steps" smooth={true} duration={scrollDuration}>
            O co chodzi?
          </Link>
        </li>
        <li>
          <Link to="aboutus" smooth={true} duration={scrollDuration}>
            O nas
          </Link>
        </li>
        <li>
          <Link to="who-we-help" smooth={true} duration={scrollDuration}>
            Fundacja i organizacje
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={scrollDuration}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
