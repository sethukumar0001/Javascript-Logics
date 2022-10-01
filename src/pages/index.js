import React, { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  function randomColor() {
    return (
      "#" +
      ("00000" + ((Math.random() * 16777216) << 0).toString(16)).substr(-6)
    );
  }

  const [list] = useState([
    { name: "Squre", path: "/squre" },
    { name: "Traingle", path: "/triangle" },
  ]);
  return (
    <div className="main-container">
      <h1 className="header" style={{ color: randomColor() }}>
        Logic Patterns
      </h1>
      <div className="main">
        <div className="container">
          {list.map((item) => {
            return (
              <Link to={item.path}>
                <p className="mainItem" style={{ background: randomColor() }}>
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
