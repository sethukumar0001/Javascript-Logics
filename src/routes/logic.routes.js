import JavascriptLogics from "../pages/JavascriptLogics";
import PrimeNumber from "../pages/JavascriptLogics/PrimeNumber";
import Javascript from "../pages/JavascriptPatterns";
import HallowSqurePattern from "../pages/JavascriptPatterns/HallowPatterns";
import Squre from "../pages/JavascriptPatterns/Squre";
import Triangle from "../pages/JavascriptPatterns/Triangle";
import ReactJS from "../pages/ReactJS";
import ReactNative from "../pages/ReactNative";

export const LogicRoutes = [
  //sidemenu
  { path: "/", name: "Javascript", component: Javascript },
  { path: "/js-logics", name: "JSLogics", component: JavascriptLogics },
  { path: "/reactjs", name: "ReactJS", component: ReactJS },
  { path: "/react-native", name: "ReactNative", component: ReactNative },
  // javascript
  { path: "/squre", name: "squre", component: Squre },
  { path: "/triangle", name: "Triangle", component: Triangle },
  { path: "/hallow-patterns", name: "hallow-patterns", component: HallowSqurePattern },

  //logics
  { path: "/prime-number", name: "PrimeNumber", component: PrimeNumber },
  //react-native
];
