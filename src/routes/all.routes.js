import { HelpersRoutes } from "./helpers.routes";
import { JavascriptLogicRoutes } from "./js-logics.routes";
import { JavascriptPatternRoutes } from "./js-patterns.routes";
import { SideMenuRoutes } from "./side-menu.routes";

export const AllRoutes = [
    ...HelpersRoutes,
    ...SideMenuRoutes,
    ...JavascriptLogicRoutes,
    ...JavascriptPatternRoutes
];
