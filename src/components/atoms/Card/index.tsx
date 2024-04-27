import { ReactNode } from "react";

import { CardContainer, CardHeader, CardContent, CardFooter } from "./style";

interface Props {
  children?: ReactNode;
}

const Card = ({ children }: Props) => {
  return <CardContainer>{children}</CardContainer>;
};

const Header = ({ children }: Props) => {
  return <CardHeader>{children}</CardHeader>;
};

const Content = ({ children }: Props) => {
  return <CardContent>{children}</CardContent>;
};

const Footer = ({ children }: Props) => {
  return <CardFooter>{children}</CardFooter>;
};

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;

export default Card;
