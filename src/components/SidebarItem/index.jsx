import React from "react";
import { Container } from "./styles";

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container
    // style={{background:'black'}}
    >
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
