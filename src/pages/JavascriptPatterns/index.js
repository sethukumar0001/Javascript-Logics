import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/Layout";

function JavascriptPatterns(props) {
  const [list] = useState([
    { name: "Squre", path: "/squre" },
    { name: "Traingle", path: "/triangle" },
    { name: "Hallow Patterns", path: "/hallow-patterns" },
  ]);
  return (
    <MainLayout>
      <div className="main-container">
        <div className="main">
          <div className="container">
            {list.map((item, index) => {
              return (
                <div className="card-root">
                  <Link to={item.path} key={index}>
                    <p className="mainItem">{item.name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default JavascriptPatterns;
