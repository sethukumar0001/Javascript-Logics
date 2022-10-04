import Javascript from "../pages/Javascript";
import Squre from "../pages/Javascript/logics/Squre";
import Triangle from "../pages/Javascript/logics/Triangle";
import ReactJS from "../pages/ReactJS";

export const LogicRoutes = [
  { path: "/", name: "Javascript", component: Javascript },
  { path: "/reactjs", name: "ReactJS", component: ReactJS },
  // javascript
  { path: "/squre", name: "squre", component: Squre },
  { path: "/triangle", name: "Triangle", component: Triangle },
];
