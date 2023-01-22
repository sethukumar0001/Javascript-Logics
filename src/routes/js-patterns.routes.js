import HallowSqurePattern from "../pages/JavascriptPatterns/HallowPatterns";
import Squre from "../pages/JavascriptPatterns/Squre";
import Triangle from "../pages/JavascriptPatterns/Triangle";

export const JavascriptPatternRoutes = [
  { path: "/squre", name: "squre", component: Squre },
  { path: "/triangle", name: "Triangle", component: Triangle },
  {
    path: "/hallow-patterns",
    name: "hallow-patterns",
    component: HallowSqurePattern,
  },
];
