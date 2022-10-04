import React from "react";

function NotFoundPage(props) {
  return (
    <div>
      <center>
        <img
          src={require(`./lottie/not-found.gif`)}
          alt="img"
          style={{ height: "550", width: "550px", marginTop: "100px" }}
        />
      </center>
    </div>
  );
}

export default NotFoundPage;
