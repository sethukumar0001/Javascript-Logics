import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/Layout";

function JavascriptPatterns(props) {
  const [list] = useState([
    { name: "Squre", path: "/squre" },
    { name: "Traingle", path: "/triangle" },
    { name: "Hallow Patterns", path: "/hallow-patterns" },
  ]);
  const [searchList, setSearchList] = useState([
    { name: "Squre", path: "/squre" },
    { name: "Traingle", path: "/triangle" },
    { name: "Hallow Patterns", path: "/hallow-patterns" },
  ]);

  const [search, setSearch] = useState("");
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    let mainList = list.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchList(mainList);
  };
  return (
    <MainLayout>
      <div className="main-container">
        <div className="main">
          <div className="main-search">
            <input
              placeholder="Search here"
              onChange={handleChangeSearch}
              value={search}
              className="input-search"
            />
          </div>
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

export default JavascriptPatterns;
