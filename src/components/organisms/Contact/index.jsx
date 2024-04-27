import React from "react";
import Button from "../../atoms/Button";

const Contact = () => {
  return (
    <section className="contact-form">
      <h2>Tell me about your next project</h2>
      <form>
        <Button variant="secondary">Email Me</Button>
        <Button variant="secondary">WhatsApp</Button>
      </form>
    </section>
  );
};

export default Contact;
