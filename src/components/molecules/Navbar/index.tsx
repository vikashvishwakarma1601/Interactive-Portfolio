import React, { useEffect, useState } from "react";
import { Nav, NavContainer, NavItem, NavWrapper } from "./style";
import FontIcon from "../../atoms/FontIcon";
import Battery from "../../atoms/Battery";
import AppleIcon from "../../../assets/icons/apple.svg?react";

const getDateTime = () => {
  let formattedDate: string | string[] = new Date().toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  formattedDate = formattedDate.split(",");
  formattedDate[1] = formattedDate[1].split(" ").reverse().join(" ");
  return formattedDate.join(" ");
};

const NavBar = () => {
  const [dateTime, setDateTime] = useState(getDateTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDateTime(getDateTime);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Nav>
      <NavContainer>
        <NavWrapper>
          <NavItem>
            <FontIcon icon={AppleIcon} width={18} height={18} />
          </NavItem>
          <NavItem>Resume</NavItem>
          <NavItem>Edit</NavItem>
          <NavItem>Profile</NavItem>
        </NavWrapper>
        <NavWrapper $flexDirection="flex-end">
          <NavItem>
            <Battery />
          </NavItem>
          <NavItem>{dateTime}</NavItem>
        </NavWrapper>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
