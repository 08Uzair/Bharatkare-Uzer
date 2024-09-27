import React from "react";
import ContactCard from "../components/general/ContactCard";
import ContactForm from "../components/general/ContactForm";
import CustomWall from "../components/general/CustomWall";

const Contact = () => {
  return (
    <>
      <CustomWall txt1="Contact Us" />
      <ContactCard />
      <ContactForm />
    </>
  );
};

export default Contact;
