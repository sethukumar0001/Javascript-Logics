import React from "react";
import CodeBlockComponent from "../../../components/CodeBlock";
import MainLayout from "../../../components/Layout";

function BubbleSort() {
  const BubbleSortFun = () => {
    let arr = [5, 3, 23, 10, 15, 9, 8];
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j + 1] < arr[j]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return `` + arr;
  };
  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/algorithm`}
        header={"Bubble Sort"}
        logicfun={() => BubbleSortFun()}
        logic={`
        let arr = [5, 3, 23, 10, 15, 9, 8];
        let temp = "";
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
              temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
        return arr;
          `}
      />
    </MainLayout>
  );
}

export default BubbleSort;
