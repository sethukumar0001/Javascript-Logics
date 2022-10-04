import { Breadcrumb } from "antd";
import { CopyBlock, dracula } from "react-code-blocks";
import "./index.css";
// ****
// ****
// ****
// ****

function Squre() {
  const logicfun = () => {
    let num = 5;
    let str = "";
    for (let i = 1; i <= num; i++) {
      str += "* ".repeat(num)+"\n";
    }
    return str;
  };
  return (
    <div className="codemain">
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Javascript</Breadcrumb.Item>
            <Breadcrumb.Item>Squre</Breadcrumb.Item>
          </Breadcrumb>
      <h3>Squre Pattern</h3>
      <p className="codemaintext">{logicfun()}</p>
      <div>
        <CopyBlock
          language={"jsx"}
          text={`
          let num = 5;
          let str = "";
          for (let i = 1; i <= num; i++) {
            str += "* ".repeat(num)+"/n";
          }
          return str;`}
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

export default Squre;
