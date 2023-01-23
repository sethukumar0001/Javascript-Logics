import FibanocciAndFactorial from "../pages/JavascriptLogics/Fib-Factorial";
import PrimeNumber from "../pages/JavascriptLogics/PrimeNumber";
import ReverseString from "../pages/JavascriptLogics/ReverseString";

export const JavascriptLogicRoutes = [
  { path: "/prime-number", name: "PrimeNumber", component: PrimeNumber },
  { path: "/reverse-string", name: "ReverseString", component: ReverseString },
  {
    path: "/fib-fact",
    name: "FibanocciAndFactorial",
    component: FibanocciAndFactorial,
  },
];
