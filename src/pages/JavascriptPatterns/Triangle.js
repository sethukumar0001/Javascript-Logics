import CodeBlockComponent from "../../components/CodeBlock";
import MainLayout from "../../components/Layout";

function Triangle() {
  //     *
  //    * *
  //   * * *
  //  * * * *
  // * * * * *

  const incPyramid = () => {
    let num = 6;
    let triangle = "";
    for (let i = 0; i < num; i++) {
      triangle += "* ".repeat(i) + "\n";
    }
    return triangle;
  };

  // * * * * * *
  //  * * * * *
  //   * * * *
  //    * * *
  //     * *
  //      *
  const decPyramid = () => {
    let num = 6;
    let triangle = "";
    for (let i = num; i > 0; i--) {
      triangle += "* ".repeat(i) + "\n";
    }
    return triangle;
  };

  //     *
  //    ***
  //   *****
  //  *******
  // *********

  const trianglePyramid = () => {
    let num = 6;
    let triangle = "";
    for (let i = 1; i < num; i++) {
      let space = num - i;
      triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "\n";
    }
    return triangle;
  };

  // *********
  //  *******
  //   *****
  //    ***
  //     *

  const reversedTrianglePyramid = () => {
    let num = 6;
    let triangle = "";
    for (let i = num; i > 0; i--) {
      let space = num - i;
      triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "\n";
    }
    return triangle;
  };

  //     *
  //    ***
  //   *****
  //  *******
  // *********
  //  *******
  //   *****
  //    ***
  //     *

  const dimondPyramid = () => {
    let num = 6;
    let triangle = "";
    for (let i = 1; i < num; i++) {
      let space = num - i;
      triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "\n";
    }
    for (let i = num; i > 0; i--) {
      let space = num - i;
      triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "\n";
    }
    return triangle;
  };

  return (
    <MainLayout>
      <CodeBlockComponent
        route={`/`}
        header={"Increasing Pyramid"}
        logicfun={incPyramid}
        logic={`
        let num = 6;
          let triangle = "";
          for (let i = 0; i < num; i++) {
            triangle += "* ".repeat(i)+"/n";
          }
          return triangle;
        `}
      />
      <CodeBlockComponent
        header={"Decreasing Pyramid"}
        logicfun={decPyramid}
        logic={`
        let num = 6;
          let triangle = "";
          for (let i = num; i > 0; i--) {
            triangle += "* ".repeat(i) + "/n";
          }
          return triangle;
        `}
      />
      <CodeBlockComponent
        header={"Isosceles Triangle Pyramid"}
        logicfun={trianglePyramid}
        logic={`
        let num = 6;
        let triangle = "";
        for (let i = 1; i < num; i++) {
          let space = num - i;
          triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "/n";
        }
        return triangle;
        `}
      />

      <CodeBlockComponent
        header={"Reversed Isosceles Triangle Pyramid"}
        logicfun={reversedTrianglePyramid}
        logic={`
        let num = 6;
        let triangle = "";
        for (let i = num; i > 0; i--) {
          let space = num - i;
          triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "/n";
        }
        return triangle;
        `}
      />

      <CodeBlockComponent
        header={"Dimond Triangle Pyramid"}
        logicfun={dimondPyramid}
        logic={`
        let num = 6;
        let triangle = "";
        for (let i = 1; i < num; i++) {
          let space = num - i;
          triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "/n";
        }
        for (let i = num; i > 0; i--) {
          let space = num - i;
          triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "/n";
        }
        return triangle;
        `}
      />
    </MainLayout>
  );
}

export default Triangle;
