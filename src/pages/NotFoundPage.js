import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage(props) {
  const navigate = useNavigate();
  return (
    <div>
      <center>
        <img
          src={require(`./lottie/not-found.gif`)}
          alt="img"
          style={{ height: "550", width: "550px" }}
        />
      </center>
      <h1 className="notfoundheader" onClick={() => navigate(`/`)}>
        Dashboard
      </h1>
    </div>
  );
}

export default NotFoundPage;
