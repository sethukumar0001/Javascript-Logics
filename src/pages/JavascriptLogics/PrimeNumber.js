import React, { useState } from "react";
import CodeBlockComponent from "../../components/CodeBlock";
import MainLayout from "../../components/Layout";

//check given number is prime number or not

function PrimeNumber(props) {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState("");

  const logicfun = () => {
    let isPrime = true;
    // check if number is equal to 1
    if (number === 1) {
      setResult("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (number > 1) {
      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
        console.log(i, `${number} % ${i}->` + (number % i));
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        setResult(`${number} is a prime number`);
      } else {
        setResult(`${number} is a not prime number`);
      }
    }
    // check if number is less than 1
    else {
      setResult("The number is not a prime number.");
    }
  };
  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/js-logics`}
        header={"Prime Number"}
        logicfun={logicfun}
        logic={`
        //method 1
        let isPrime = true;
        if (number === 1) {
          setResult("1 is neither prime nor composite number.");
        }
        else if (number > 1) {
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            setResult('prime number');
          } else {
            setResult('not prime number');
          }
        }
        else {
          setResult("The number is not a prime number.");
        }

        Q-> prime(201)
        //method 2
            for(let i=0;i< n;i++){
                if(n %i === 0){         
                    return false
                }else{
                    return true
                }      
            }

        //method 3
            for(let i =2;i<n/2;i++){
                if(n%i === 0){
                    return false
                }
                else{
                    return true
                }
            }

        //method 4
            for(let i =2;i<Math.sqrt(n);i++){
                if(n%i === 0){
                    return false
                }
                else{
                    return true
                }
            }
        `}
      />
      <div className="ui">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        {/* <button onClick={logicfun}>submit</button> */}
        <br />
        <p>{result}</p>
      </div>
    </MainLayout>
  );
}

export default PrimeNumber;
