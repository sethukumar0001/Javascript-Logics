import React from "react";
import CodeBlockComponent from "../../components/CodeBlock";
import MainLayout from "../../components/Layout";

function FibanocciAndFactorial(props) {
  const FibanocciFunction = (n) => {
    if (n < 2) {
      return n;
    }
    return FibanocciFunction(n - 1) + FibanocciFunction(n - 2);
  };
  const FactorialFunction = (n) => {
    if (n < 2) {
      return 1;
    }
    return n * FactorialFunction(n - 1);
  };
  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/js-logics`}
        header={"Fibanocci"}
        logicfun={() => FibanocciFunction(5)}
        logic={`
      const fib = (n = 5) => {
        if(n<2){
            return n
        }
        return fib(n-1)+fib(n-2)
      }
          `}
      />
      <CodeBlockComponent
        header={"Factorial"}
        logicfun={() => FactorialFunction(5)}
        logic={`
      const factorial = (n = 5) => {
        if(n<2){
            return 1
        }
        return n*factorial(n-1)
      }
          `}
      />
    </MainLayout>
  );
}

export default FibanocciAndFactorial;
