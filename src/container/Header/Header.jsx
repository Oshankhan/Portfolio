import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../cosntant";
import AppWrap from "../../Wapper/AppWrap";

function Header() {
  return (
    <div className="app__header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="appheader-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text" style={{ paddingLeft: 45 }}>
                Hello, I am
              </p>
              <h1 className="head-text">Oshan</h1>
            </div>
            <span>👋</span>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer / Flutter Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="title__profile-img app__flex"
        whileInView={{ opacity: [0, 1] }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="img__div"></div>
      </motion.div>

      <div className="small__icon-div">
        {[images.react, images.redux, images.node].map((item) => (
          <motion.div
            key={item}
            className="small__icons"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 2, delay: 1 }}
          >
            <div>
              <img src={item} alt="react" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AppWrap(Header, "home");
