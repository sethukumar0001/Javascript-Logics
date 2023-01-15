import React from "react";
import { LogicRoutes } from "./logic.routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

function MainRoutes(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {LogicRoutes.map((item, key) => {
            let Element = item.component;
            return <Route key={key} path={item.path}  element={<Element />} />;
          })}
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainRoutes;
