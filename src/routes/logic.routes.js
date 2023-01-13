import JavascriptLogics from "../pages/JavascriptLogics";
import Javascript from "../pages/JavascriptPatterns";
import Squre from "../pages/JavascriptPatterns/logics/Squre";
import Triangle from "../pages/JavascriptPatterns/logics/Triangle";
import ReactJS from "../pages/ReactJS";

export const LogicRoutes = [
  //sidemenu
  { path: "/", name: "Javascript", component: Javascript },
  { path: "/js-logics", name: "JSLogics", component: JavascriptLogics },
  { path: "/reactjs", name: "ReactJS", component: ReactJS },
  // javascript
  { path: "/squre", name: "squre", component: Squre },
  { path: "/triangle", name: "Triangle", component: Triangle },
];
