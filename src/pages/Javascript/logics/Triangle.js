import { Breadcrumb } from "antd";
import { CopyBlock, dracula } from "react-code-blocks";
import "./index.css";

function Triangle() {
  // *
  // * *
  // * * *
  // * * * *
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
  // * * * * *
  // * * * *
  // * * *
  // * *
  // *
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

  return (
    <div className="codemain">
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Javascript</Breadcrumb.Item>
        <Breadcrumb.Item>Triangle</Breadcrumb.Item>
      </Breadcrumb>
      <h3>Increasing Pyramid</h3>
      <p className="codemaintext">{incPyramid()}</p>
      <div>
        <CopyBlock
          language={"jsx"}
          text={`
          let num = 6;
          let triangle = "";
          for (let i = 0; i < num; i++) {
            triangle += "* ".repeat(i)+"/n";
          }
          return triangle;`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br />
      </div>

      <h3>Decreasing Pyramid</h3>
      <p className="codemaintext">{decPyramid()}</p>
      <div>
        <CopyBlock
          language={"jsx"}
          text={`
          let num = 6;
          let triangle = "";
          for (let i = num; i > 0; i--) {
            triangle += "* ".repeat(i) + "/n";
          }
          return triangle;`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br />
      </div>

      <h3>Isosceles Triangle Pyramid</h3>
      <p className="codemaintext">{trianglePyramid()}</p>
      <div>
        <CopyBlock
          language={"jsx"}
          text={`
          let num = 6;
          let triangle = "";
          for (let i = 1; i < num; i++) {
            let space = num - i;
            triangle += " ".repeat(space) + "*".repeat(2 * i - 1) + "/n";
          }
          return triangle;`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
        <br />
      </div>
    </div>
  );
}

export default Triangle;
