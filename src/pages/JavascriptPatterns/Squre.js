import { CopyBlock, dracula } from "react-code-blocks";
import MainLayout from "../../components/Layout";
import "./index.css";
import { FcUpLeft } from "react-icons/fc";
import { Link } from "react-router-dom";
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
  return (
    <MainLayout>
      <Link to="/">
        <FcUpLeft size={30} className="back-icon" color="black" />
      </Link>
      <div className="codemain">
        <h3>Squre Pattern</h3>
        <p className="codemaintext">{logicfun()}</p>
        <div className="codeblock">
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
    </MainLayout>
  );
}

export default Squre;
