import HallowSqurePattern from "../pages/JavascriptPatterns/HallowPatterns";
import Squre from "../pages/JavascriptPatterns/Squre";
import StarPatterns from "../pages/JavascriptPatterns/StarPatterns";
import Triangle from "../pages/JavascriptPatterns/Triangle";

export const JavascriptPatternRoutes = [
  { path: "/squre", name: "squre", component: Squre },
  { path: "/triangle", name: "Triangle", component: Triangle },
  {
    path: "/hallow-patterns",
    name: "hallow-patterns",
    component: HallowSqurePattern,
  },
  {
    path: "/star-patterns",
    name: "Shape Patterns",
    component: StarPatterns,
  },
];
