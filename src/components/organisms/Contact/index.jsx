import React from "react";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import EmailIcon from "../../../assets/icons/email.svg";

import { ContactContainer, ButtonWrapper } from "./style";

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Tell me about your next project</h2>
      <ButtonWrapper>
        <Button
          variant="secondary"
          alignIcon="left"
          size="md"
          renderIcon={() => <Icon src={EmailIcon} />}
        >
          Email Me
        </Button>
        <Button size="md">WhatsApp</Button>
      </ButtonWrapper>
    </ContactContainer>
  );
};

export default Contact;
