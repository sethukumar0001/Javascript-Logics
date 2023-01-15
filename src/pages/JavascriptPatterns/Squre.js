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
    </MainLayout>
  );
}

export default Squre;
