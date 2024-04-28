import React from "react";
import Link from "../../atoms/Link";
import { FooterContainer, List, ListItem } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 All rights reserved.</p>
      <List>
        <ListItem>
          <Link href="/">LinkedIn</Link>
        </ListItem>
        <ListItem>
          <span>/</span>
        </ListItem>
        <ListItem>
          <Link href="/">Github</Link>
        </ListItem>
      </List>
    </FooterContainer>
  );
};

export default Footer;
