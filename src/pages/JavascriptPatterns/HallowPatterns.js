import MainLayout from "../../components/Layout";
import CodeBlockComponent from "../../components/CodeBlock";

function HallowSqurePattern() {
  // ****
  // *  *
  // *  *
  // ****
  const logicfun = () => {
    let num = 6;
    let str = "";
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        if (i === 0 || i === num - 1) {
          str += "* ";
        } else {
          if (j === 0 || j === num - 1) {
            str += "* ";
          } else {
            str += "   ";
          }
        }
      }
      str += "\n";
    }
    return str;
  };
  //   *
  //   **
  //   * *
  //   *  *
  //   *   *
  //   ******
  const HallowTrianglelogicfun = () => {
    let num = 6;
    let str = "";
    for (let i = 0; i < num; i++) {
      for (let j = 0; j <= i; j++) {
        if (i < 2 || i === num - 1) {
          str += "* ";
        } else {
          if (j === 0 || j === i) {
            str += "* ";
          } else {
            str += "   ";
          }
        }
      }
      str += "\n";
    }
    return str;
  };
  //     *
  //    * *
  //   *   *
  //  *     *
  // *********

  const HallowPyramidlogicfun = () => {
    let num = 7;
    let str = "";
    for (let i = 1; i < num; i++) {
      let space = num - i;
      if (i === 1 || i === num - 1) {
        str += " ".repeat(space) + "*".repeat(2 * i - 1);
        str += "\n";
      } else {
        // console.log(
        //   i,
        //   "<--- ((2 * i - 3) =>" + (2 * i - 3) + " = gap) --->",
        //   "space--->",
        //   space
        // );
        str += " ".repeat(space) + "*" + "  ".repeat(2 * i - 3) + "*";
        str += "\n";
      }
    }
    // console.log(str);
    return str;
  };

  const HallowDimondlogicfun = () => {
    let num = 7;
    let str = "";
    for (let i = 1; i < num; i++) {
      let space = num - i;
      if (i === 1) {
        str += " ".repeat(space) + "*".repeat(2 * i - 1);
        str += "\n";
      } else {
        str += " ".repeat(space) + "*" + " ".repeat(2 * i - 3) + "*";
        str += "\n";
      }
    }
    for (let j = num - 2; j > 0; j--) {
      let space = num - j;
      if (j === 1) {
        str += " ".repeat(space) + "*".repeat(2 * j - 1);
        str += "\n";
      } else {
        str += " ".repeat(space) + "*" + " ".repeat(2 * j - 3) + "*";
        str += "\n";
      }
    }
    return str;
  };

  // * * * * * * * * * *
  // * *             * *
  // *   *         *   *
  // *     *     *     *
  // *       * *       *
  // *       * *       *
  // *     *     *     *
  // *   *         *   *
  // * *             * *
  // * * * * * * * * * *

  
  const hallowSqureWithDiagnols = () => {
    let num = 6;
    let str = "";
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        if(i===1 || i===num || j===1 || j===num || i===j || j===(num - i + 1)){
            str += "* ";
          }else{
            str += "  ";
          }
      }
      str += "\n";
    }
    return str;
  };

  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/`}
        header={"HallowSqurePattern"}
        logicfun={logicfun}
        logic={`
        let num-2 = 6;
        let str = "";
        for (let i = 0; i < num; i++) {
          for (let j = 0; j < num; j++) {
            if (i === 0 || i === num - 1) {
              str += "* ";
            } else {
              if (j === 0 || j === num - 1) {
                str += "* ";
              } else {
                str += "  ";
              }
            }
          }
          str += "/n";
        }
        return str;
        `}
      />
      <CodeBlockComponent
        header={"Hollow Triangle Star Pattern"}
        logicfun={HallowTrianglelogicfun}
        logic={`
        let num = 6;
        let str = "";
        for (let i = 0; i < num; i++) {
          for (let j = 0; j <= i; j++) {
            if (i < 2 || i === num - 1) {
              str += "* ";
            } else {
              if (j === 0 || j === i) {
                str += "* ";
              } else {
                str += "   ";
              }
            }
          }
          str += "/n";
        }
        return str;
        `}
      />
      <CodeBlockComponent
        header={"Hollow Pyramid Star Pattern"}
        logicfun={HallowPyramidlogicfun}
        logic={`
        let num = 7;
        let str = "";
        for (let i = 1; i < num; i++) {
          let space = num - i;
          if (i === 1 || i === num - 1) {
            str += " ".repeat(space) + "*".repeat(2 * i - 1);
            str += "/n";
          } else {
            str += " ".repeat(space) + "*" + " ".repeat(2 * i - 3) + "*";
            str += "/n";
          }
        }
        return str;
        `}
      />
      <CodeBlockComponent
        header={"Hollow Diamond Pattern"}
        logicfun={HallowDimondlogicfun}
        logic={`
        let num = 7;
        let str = "";
        for (let i = 1; i < num; i++) {
          let space = num - i;
          if (i === 1) {
            str += " ".repeat(space) + "*".repeat(2 * i - 1);
            str += "/n";
          } else {
            str += " ".repeat(space) + "*" + " ".repeat(2 * i - 3) + "*";
            str += "/n";
          }
        }
        for (let j = num - 2; j > 0; j--) {
          let space = num - j;
          if (j === 1) {
            str += " ".repeat(space) + "*".repeat(2 * j - 1);
            str += "/n";
          } else {
            str += " ".repeat(space) + "*" + " ".repeat(2 * j - 3) + "*";
            str += "/n";
          }
        }
        return str;
        `}
      />
      <CodeBlockComponent
        header={"Hollow Square with Diagonals"}
        logicfun={hallowSqureWithDiagnols}
        logic={`
        /*
        * Print star for, 
        * first row (i==1) or 
        * last row (i==num) or
        * first column (j==1) or
        * last column (j==num) or 
        * row equal to column (i==j) or 
        * column equal to num-row (j==num-i+1)
        */
        let num = 6;
        let str = "";
        for (let i = 1; i <= num; i++) {
          for (let j = 1; j <= num; j++) {
            if(i==1 || i==num || j==1 || j==num || i==j || j==(num - i + 1)){
                str += "* ";
              }else{
                str += "  ";
              }
          }
          str += "/n";
        }
        return str;
        `}
      />
    </MainLayout>
  );
}

export default HallowSqurePattern;
