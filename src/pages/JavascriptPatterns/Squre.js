import MainLayout from "../../components/Layout";
import CodeBlockComponent from "../../components/CodeBlock";
// ****
// ****
// ****
// ****

function Squre() {
  const logicfun = () => {
    let num = 5;
    let str = "";
    for (let i = 1; i <= num; i++) {
      str += "* ".repeat(num) + "\n";
    }
    return str;
  };

  // ********
  //  ********
  //   ********
  //    ********
  //     ********

  function parallelogramFun() {
    let num = 5;
    let str = "";
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
        str += "  ";
      }
      for (let j = 1; j <= num; j++) {
        str += "* ";
      }
      str += "\n";
    }
    return str;
  }

  // *********
  //  *       *
  //   *       *
  //    *       *
  //     *       *
  //      *********

  function hallowParallelogramFun() {
    let num = 5;
    let str = "";
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
        str += "  ";
      }
      for (let j = 1; j <= num; j++) {
        if (i === 1 || i === num || j === 1 || j === num) {
          str += "* ";
        } else {
          str += "   ";
        }
      }
      str += "\n";
    }
    return str;
  }

  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/`}
        header={"Squre Pattern"}
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
      <CodeBlockComponent
        header={"Parallelogram"}
        logicfun={parallelogramFun}
        logic={`
        let num = 5;
        let str = "";
        for (let i = 1; i <= num; i++) {
          for (let j = 1; j <= i; j++) {
            str += "  ";
          }
          for (let j = 1; j <= num; j++) {
            str += "* ";
          }
          str += "/n";
        }
        return str;
        `}
      />
      <CodeBlockComponent
        header={"Hallow Parallelogram"}
        logicfun={hallowParallelogramFun}
        logic={`
        let num = 5;
        let str = "";
        for (let i = 1; i <= num; i++) {
          for (let j = 1; j <= i; j++) {
            str += "  ";
          }
          for (let j = 1; j <= num; j++) {
            if (i === 1 || i === num || j === 1 || j === num) {
              str += "* ";
            } else {
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

export default Squre;
