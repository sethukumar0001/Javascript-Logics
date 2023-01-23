import React from "react";
import CodeBlockComponent from "../../components/CodeBlock";
import MainLayout from "../../components/Layout";

function ReverseString() {
  const reverseFun1 = () => {
    let string = "This is Sethu";
    let reverse = [];
    for (let i = string.length; i > 0; i--) {
      reverse.push(string[i]);
    }
    return reverse.join("");
  };

  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/js-logics`}
        header={"Reverse String"}
        logicfun={reverseFun1}
        logic={`
        // first ----split that specific string + reverse +join

        let string = "This is Sethu";
        //method 1
        let reverse = [];
        for (let i = string.length; i > 0; i--) {
          reverse.push(string[i]);
        }
        return reverse.join("");

        //method 2
        return string.split('').reverse().join('');

        //method 3
        return [...string1].reverse().join('')

        //method 4
        return str.split('').reduce((acc,char)=>char+acc,'')

        //method 5
        reverseString = ""
        for(let k of str){
            reverseString = k+reverseString
        }
        return reverseString
          `}
      />
    </MainLayout>
  );
}

export default ReverseString;
