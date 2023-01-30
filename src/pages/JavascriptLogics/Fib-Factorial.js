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
        //method 1

        const fib = (n) => {
          n=5;
          if(n<2){
              return n
          }
          return fib(n-1)+fib(n-2)
        }

        //method 2
        const fibanocci = (n) => {
          const fib = [0,1];
          for (let i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fin[i-2]
          }
          return fib
        }
        console.log(fibanocci(2)) // [0,1]
        console.log(fibanocci(3)) // [0,1,1]
        console.log(fibanocci(5)) // [0,1,1,2,3]
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
