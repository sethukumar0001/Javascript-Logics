import React, { useState } from "react";
import MainLayout from "../../components/Layout";
import { BsGithub } from "react-icons/bs";
import ReactNativeHelper from "./ReactNativeHelpers";

function ReactNative(props) {
  const [list] = useState([
    {
      name: "Pravarsha UI",
      path: "https://github.com/React-Native-Repositories/pravarsha",
    },
    {
      name: "Phone Verification",
      path: "https://github.com/React-Native-Repositories/phone-verification",
    },
    {
      name: "Food Finder",
      path: "https://github.com/React-Native-Repositories/food-finder",
    },
    {
      name: "Digital VCard",
      path: "https://github.com/React-Native-Repositories/vcard",
    },
  ]);
  return (
    <MainLayout>
      <div className="main-container">
        <div className="main">
          <h3 style={{ marginTop: "100px", marginLeft: "10px" }}>
            Github Repositories
          </h3>
          <div className="container">
            {list.map((item, index) => {
              return (
                <a
                  href={item.path}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mainItem" style={{ display: "flex" }}>
                    <BsGithub size={20} />
                    <span style={{ marginLeft: "5px" }}>{item.name}</span>
                  </p>
                </a>
              );
            })}
          </div>
          <ReactNativeHelper />
        </div>
      </div>
    </MainLayout>
  );
}

export default ReactNative;
