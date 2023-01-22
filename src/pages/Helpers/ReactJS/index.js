import React from "react";
import MainLayout from "../../../components/Layout";
import RouteHeader from "../../../components/RouterHeader";

function ReactJS(props) {
  return (
    <MainLayout>
      <div style={{ marginTop: "100px" }}>
        <RouteHeader route={`/helpers`} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          Coming Soon.....
        </div>
      </div>
    </MainLayout>
  );
}

export default ReactJS;
