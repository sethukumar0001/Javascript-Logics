import React from "react";
import { Container, Content } from "./styles";
import {
  FaTimes,
  FaJs,
  FaReact,
} from "react-icons/fa";
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
        <Link to="/reactjs">
          <SidebarItem Icon={FaReact} Text="React JS" path="/reactjs" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
