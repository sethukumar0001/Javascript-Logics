import React from "react";
import { Container } from "./styles";

const SidebarItem = ({ Icon, Text, path }) => {
  console.log(window.location.pathname);
  return (
    <Container
      style={{
        background: window.location.pathname === `${path}` ? "black" : "",
      }}
    >
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
