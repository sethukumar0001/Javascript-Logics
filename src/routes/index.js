import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import { AllRoutes } from "./all.routes";

function MainRoutes(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {AllRoutes.map((item, key) => {
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
