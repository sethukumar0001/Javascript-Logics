import { CopyBlock, dracula } from "react-code-blocks";
import "./index.css";
// ****
// ****
// ****
// ****

function Squre() {
  const logicfun = () => {
    let numberSquare = 5;
    let stringSquare = "";
    for (let i = 1; i <= numberSquare; i++) {
      for (let j = 1; j <= numberSquare; j++) {
        stringSquare += "*";
      }
      stringSquare += "\n";
    }
    return stringSquare;
  };
  return (
    <div className="codemain">
      <h3>Logic</h3>
      <p className="codemaintext">{logicfun()}</p>
      <div>
        <CopyBlock
          language={"jsx"}
          text={`
          let numberSquare = 5;
          let stringSquare = "";
          for (let i = 1; i <= numberSquare; i++) {
            for (let j = 1; j <= numberSquare; j++) {
              stringSquare += "*";
            }
            stringSquare += "/n";
          }
          return stringSquare;`}
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
