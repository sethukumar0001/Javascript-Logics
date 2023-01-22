import Helpers from "../pages/Helpers";
import JavascriptLogics from "../pages/JavascriptLogics";
import Javascript from "../pages/JavascriptPatterns";

export const SideMenuRoutes = [
  { path: "/", name: "Javascript", component: Javascript },
  { path: "/js-logics", name: "JSLogics", component: JavascriptLogics },
  { path: "/helpers", name: "Helpers", component: Helpers },
];
