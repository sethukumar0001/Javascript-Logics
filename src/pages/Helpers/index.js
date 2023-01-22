import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/Layout";

function Helpers(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */
  const [list] = useState([
    { name: "React Native", path: "/react-native" },
    { name: "React Js", path: "/reactjs" },
  ]);
  const [searchList, setSearchList] = useState([]);
  /* -------------------------------------------------------------------------- */
  /*                               Useeffect section                            */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    setSearchList(list);
  }, []);
  return (
    <MainLayout>
      <div className="main-container">
        <div className="main">
          <div className="container">
            {searchList.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <div className="card-root">
                    <p className="mainItem">{item.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Helpers;
