import MainLayout from "../../components/Layout";
import CodeBlockComponent from "../../components/CodeBlock";

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

function StarPatterns() {
  const HourglassStarPattern = () => {
    let num = 5;
    let str = "";
    for (let j = num; j > 1; j--) {
      let space = num - j;
      str += " ".repeat(space) + "*".repeat(2 * j - 1);
      str += "\n";
    }
    for (let i = 1; i <= num; i++) {
      let space = num - i;
      str += " ".repeat(space) + "*".repeat(2 * i - 1);
      str += "\n";
    }
    return str;
  };

  // *
  // **
  // ***
  // ****
  // *****
  // ****
  // ***
  // **
  // *

  const RightPascalPattern = () => {
    let num = 5;
    let str = "";
    for (let i = 1; i <= num; i++) {
      str += "*".repeat(i);
      str += "\n";
    }
    for (let j = num + 1; j > 0; j--) {
      str += "*".repeat(j);
      str += "\n";
    }
    return str;
  };

  //  ***   ***
  // ***** *****
  // ***********
  //  *********
  //   *******
  //    *****
  //     ***
  //      *

  const HeartStarPattern = () => {
    let num = 6;
    let str = "";
    //******* Upper Shape *******//
    for (let i = num / 2; i < num; i += 2) {
      for (let j = 0; j < num - i - 1; j += 2) {
        str += " ";
      }
      for (let j = 0; j < i; j++) {
        str += "*";
      }
      for (let j = 0; j < num - i; j++) {
        str += " ";
      }
      for (let j = 0; j < i; j++) {
        str += "*";
      }
      str += "\n";
    }

    //******* Lower Pyramin *******//
    // for (let j = num; j > 0; j--) {
    //   let space = num - j;
    //   str += " ".repeat(space) + "*".repeat(2 * j - 1);
    //   str += "\n";
    // }
    for (let i = 0; i < num; i++) {
      //  let spaces
      for (let j = 0; j < i; j++) {
        str += " ";
      }
      //method 1
      // for (let k = 0; k < (num - i) * 2 - 1; k++) {
      //   str += "*";
      // }
      //method 2
      for (let k = 0; k < num - i; k++) {
        str += "*";
      }
      for (let k = num - i - 1; k > 0; k--) {
        str += "*";
      }
      str += "\n";
    }
    return str;
  };

  //   +
  //   +
  //   +
  //   +
  // +++++++++
  //   +
  //   +
  //   +
  //   +
  const PlusPattern = () => {
    let num = 5;
    let str = "";
    for (let i = 1; i < 2 * num; i++) {
      if (i === num) {
        for (let j = 1; j < 2 * num - 1; j++) {
          str += "r";
        }
      } else {
        for (let j = 1; j < num - 1; j++) {
          str += " ";
        }
        str += "c";
      }
      str += "\n";
    }
    return str;
  };
  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/`}
        header={"Hourglass Star Pattern"}
        logicfun={HourglassStarPattern}
        logic={`
        let num = 5;
        let str = "";
        for (let j = num; j > 1; j--) {
          let space = num - j;
          str += " ".repeat(space) + "*".repeat(2 * j - 1);
          str += "/n";
        }
        for (let i = 1; i <= num; i++) {
          let space = num - i;
          str += " ".repeat(space) + "*".repeat(2 * i - 1);
          str += "/n";
        }
        return str;
        `}
      />
      <CodeBlockComponent
        header={"Right Pascal Star Pattern"}
        logicfun={RightPascalPattern}
        logic={`
        let num = 5;
        let str = "";
        for (let i = 1; i <= num; i++) {
          str += "*".repeat(i);
          str += "/n";
        }
        for (let j = num + 1; j > 0; j--) {
          str += "*".repeat(j);
          str += "/n";
        }
        return str;
        `}
      />

      <CodeBlockComponent
        header={"Heart Star Pattern"}
        logicfun={HeartStarPattern}
        logic={`
        let num = 6;
        let str = "";
        //******* Upper Shape *******//
        for (let i = num / 2; i < num; i += 2) {
          for (let j = 0; j < num - i - 1; j += 2) {
            str += " ";
          }
          for (let j = 0; j < i; j++) {
            str += "*";
          }
          for (let j = 0; j < num - i; j++) {
            str += " ";
          }
          for (let j = 0; j < i; j++) {
            str += "*";
          }
          str += "/n";
        }
    
        //******* Lower Pyramin *******//
        // for (let j = num; j > 0; j--) {
        //   let space = num - j;
        //   str += " ".repeat(space) + "*".repeat(2 * j - 1);
        //   str += "/n";
        // }
        for (let i = 0; i < num; i++) {
          //  let spaces
          for (let j = 0; j < i; j++) {
            str += " ";
          }
          //method 1
          // for (let k = 0; k < (num - i) * 2 - 1; k++) {
          //   str += "*";
          // }
          //method 2
          for (let k = 0; k < num - i; k++) {
            str += "*";
          }
          for (let k = num - i - 1; k > 0; k--) {
            str += "*";
          }
          str += "/n";
        }
        return str;
        `}
      />

      <CodeBlockComponent
        header={"Plus Star Pattern"}
        logicfun={PlusPattern}
        logic={`
        let num = 5;
        let str = "";
        for (let i = 1; i < 2 * num; i++) {
          if (i === num) {
            for (let j = 1; j < 2 * num - 1; j++) {
              str += "r";
            }
          } else {
            for (let j = 1; j < num - 1; j++) {
              str += " ";
            }
            str += "c";
          }
          str += "\n";
        }
        return str;
        `}
      />
    </MainLayout>
  );
}

export default StarPatterns;
