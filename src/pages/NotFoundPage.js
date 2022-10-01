import React from "react";
import NotFound from "./lottie/not-found.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

function NotFoundPage(props) {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
        isStopped={false}
        isPaused={false}
      />
      <h1 className="notfoundheader" onClick={() => navigate(`/`)}>
        Dashboard
      </h1>
    </div>
  );
}

export default NotFoundPage;
