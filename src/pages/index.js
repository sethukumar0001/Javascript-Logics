import React, { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  // function randomColor() {
  //   return (
  //     "#" +
  //     ("00000" + ((Math.random() * 16777216) << 0).toString(16)).substr(-6)
  //   );
  // }

  const [list] = useState([
    { name: "Squre", path: "/squre" },
    { name: "Traingle", path: "/triangle" },
  ]);
  return (
    <div className="main-container">
      <div className="main">
        <div className="container">
          {list.map((item) => {
            return (
              <Link to={item.path}>
                <p
                  className="mainItem"
                  style={{
                    border: "1px solid #002140",
                    background: "white",
                    fontSize: "16px",
                    fontWeight: "500px",
                    color: "#002140",
                  }}
                >
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
