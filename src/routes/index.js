import React, { useState } from "react";
import { LogicRoutes } from "./logic.routes";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

function MainRoutes(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {LogicRoutes.map((item, key) => {
            let Element = item.component;
            return <Route key={key} path={item.path} element={<Element />} />;
          })}
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainRoutes;
