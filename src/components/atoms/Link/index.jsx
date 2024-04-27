import React from "react";
import { BasicLink } from "./style";

const Link = ({ children, href = "#" }) => {
  return <BasicLink href={href}>{children}</BasicLink>;
};

export default Link;
