import React from "react";
import CodeBlockComponent from "../../components/CodeBlock";
import MainLayout from "../../components/Layout";

//check given number is prime number or not

function PrimeNumber(props) {
  const logicfun = () => {
    let num = 5;
    let str = "";
    for (let i = 1; i <= num; i++) {
      str += "* ".repeat(num) + "\n";
    }
    return str;
  };
  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/js-logics`}
        header={"Prime Number"}
        logicfun={logicfun}
        logic={`
        let num = 5;
          let str = "";
          for (let i = 1; i <= num; i++) {
            str += "* ".repeat(num)+"/n";
          }
          return str;
        `}
      />
    </MainLayout>
  );
}

export default PrimeNumber;
