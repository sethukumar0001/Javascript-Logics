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
        Here's the step-by-step process of bubble sort:
        1 Compare the first two elements in the array.
        2 If the first element is larger than the second element, swap them.
        3 Move to the next pair of elements and repeat step 2.
        4 Repeat steps 1-3 until you reach the end of the array.
        5 Repeat the entire process until the array is sorted.
        6 The time complexity of bubble sort is O(n^2) in the worst case scenario, 
          making it inefficient for large arrays. However, it is easy to understand and implement, 
          making it a good choice for small arrays or for educational purposes.

        //method 1
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

        //method 2
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
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
