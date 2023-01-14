import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/Layout";

function JavascriptLogics(props) {
  const [list] = useState([
    { name: "Prime Number", path: "/squre" },
    { name: "Fibanocci Number", path: "/triangle" },
  ]);
  return (
    <MainLayout>
      <div className="main-container">
        <div className="main">
          <div className="container">
            {list.map((item) => {
              return (
                <Link to={item.path}>
                  <p className="mainItem">{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default JavascriptLogics;
