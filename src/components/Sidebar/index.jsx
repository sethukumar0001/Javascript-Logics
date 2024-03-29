import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaJs, FaMobile, FaBraille } from "react-icons/fa";
import SidebarItem from "../SidebarItem";
import { Link } from "react-router-dom";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to="/">
          <SidebarItem Icon={FaJs} Text="Js Patterns" path={"/"} />
        </Link>
        <Link to="/js-logics">
          <SidebarItem Icon={FaJs} Text="Js Logics" path="/js-logics" />
        </Link>
        <Link to="/algorithm">
          <SidebarItem Icon={FaBraille} Text="Algorithms" path="/algorithm" />
        </Link>
        <Link to="/helpers">
          <SidebarItem Icon={FaMobile} Text="Helpers" path="/helpers" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
