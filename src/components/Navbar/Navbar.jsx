import React from "react";
import "./Navbar.scss";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-link">
        {["home", "about", "work", "skills", "contact"].map((items) => (
          <li className="app__flex p-text" key={`link-${items}`}>
            <div />
            <a href={`#${items}`}>{items}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="icon" />
        {Toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ul>
              {["home", "about", "work", "skills", "contact"].map((items) => (
                <li key={items}>
                  <a href={`#${items}`} onClick={() => setToggle(false)}>
                    {items}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
