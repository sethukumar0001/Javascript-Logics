import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import RouteHeader from "../RouterHeader";

function CodeBlockComponent(props) {
  console.log(props.logicfun())
  return (
    <>
      {props.route && <RouteHeader route={props.route} />}
      <div className="codemain">
        <h3>{props.header}</h3>
        <p className="codemaintext">{props.logicfun()}</p>
        <div className="codeblock">
          <CopyBlock
            language={"jsx"}
            text={props.logic}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
          <br />
        </div>
      </div>
    </>
  );
}

export default CodeBlockComponent;
