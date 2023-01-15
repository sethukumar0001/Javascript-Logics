import React from "react";
import { FcUpLeft } from "react-icons/fc";
import { Link } from "react-router-dom";

function RouteHeader(props) {
  return (
    <div>
      <Link to={props.route?props.route:"/"}>
        <FcUpLeft size={30} className="back-icon" color="black" />
      </Link>
    </div>
  );
}

export default RouteHeader;
