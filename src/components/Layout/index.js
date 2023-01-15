import React from "react";
import Header from "../Header";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
