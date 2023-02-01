import React from "react";
import CodeBlockComponent from "../../../components/CodeBlock";
import MainLayout from "../../../components/Layout";

function SelectionSort() {
  const SelectionSortFun = () => {
    let arr = [5, 3, 23, 10, 15, 9, 8];
    let minIndex = "";
    for (let i = 0; i < arr.length - 1; i++) {
      minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (i !== minIndex) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return `` + arr;
  };
  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/algorithm`}
        header={"Selection Sort"}
        logicfun={() => SelectionSortFun()}
        logic={`
        Here's the step-by-step process of selection sort:
        1 Find the minimum element from the unsorted portion of the array.
        2 Swap the minimum element with the first unsorted element.
        3 Move the unsorted portion one step to the right.
        4 Repeat steps 1-3 until all elements are sorted.
        6 The time complexity of selection sort is O(n^2) in the worst case scenario, 
          making it inefficient for large arrays. However, it is easy to understand and implement,
          making it a good choice for small arrays or for educational purposes.

          let arr = [5, 3, 23, 10, 15, 9, 8];
          let minIndex = "";
          for (let i = 0; i < arr.length - 1; i++) {
            minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
              if (arr[j] < arr[minIndex]) {
                minIndex = j;
              }
            }
            if (i !== minIndex) {
              [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
          }
          return arr;
          `}
      />
    </MainLayout>
  );
}

export default SelectionSort;
