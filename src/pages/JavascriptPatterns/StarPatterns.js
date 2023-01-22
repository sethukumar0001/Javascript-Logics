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
    // console.log(str);
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
    </MainLayout>
  );
}

export default StarPatterns;
