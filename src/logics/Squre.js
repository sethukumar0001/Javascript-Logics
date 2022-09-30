// ****
// ****
// ****
// ****

function Squre(props) {
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
    <div style={{}}>
      <p style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
        {logicfun()}
      </p>

      <p style={{ whiteSpace: "pre-wrap" }}>
        {`
          const function = () => { 

            let numberSquare = 5;
            let stringSquare = "";
            for (let i = 1; i <= numberSquare; i++) {
              for (let j = 1; j <= numberSquare; j++) {
                stringSquare += "*";
              }
              stringSquare += "/n";
            }
            return stringSquare;

          };`}
      </p>
    </div>
  );
}

export default Squre;
