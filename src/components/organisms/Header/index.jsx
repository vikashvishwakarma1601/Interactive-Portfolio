import React from "react";
import Link from "../../atoms/Link";

import {
  HeaderContainer,
  Nav,
  Row,
  EmailContainer,
  List,
  ListItem,
} from "./style";
import Button from "../../atoms/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Row>
          <EmailContainer>
            <span>vishwakarma.vikash1601@gmail.com</span>
            <Button>Copy</Button>
          </EmailContainer>
          <Button>
            <Link>Resume</Link>
          </Button>
        </Row>
        <Row>
          <List>
            <ListItem>
              <Link href="/">LinkedIn</Link>
            </ListItem>
            <ListItem>|</ListItem>
            <ListItem>
              <Link href="/">Github</Link>
            </ListItem>
          </List>
        </Row>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
