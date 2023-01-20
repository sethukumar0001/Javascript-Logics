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
    console.log(str);
    return str;
  };
  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/`}
        header={"HallowSqurePattern"}
        logicfun={logicfun}
        logic={`
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
    </MainLayout>
  );
}

export default HallowSqurePattern;
