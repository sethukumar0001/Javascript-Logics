import Squre from "../logics/Squre";
import Triangle from "../logics/Triangle";
import Main from "../pages";

export const LogicRoutes = [
  { path: "/", name: "main", component: Main },
  { path: "/squre", name: "squre", component: Squre },
  { path:'/triangle', name:'Triangle', component:Triangle}
];
