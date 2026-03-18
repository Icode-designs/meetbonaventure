"use client";
import { useState } from "react";
import { ContactFormStyles, FormBtn } from "./cta.styles";
import InputContainer from "./inputContainer";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const budget = formData.get("budget")?.toString() || "";
    const businessName = formData.get("businessName")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName.length < 3) {
      alert("Invalid first name - must be at least 3 characters");
      return;
    }
    if (lastName.length < 3) {
      alert("Invalid last name - must be at least 3 characters");
      return;
    }
    if (businessName.length < 3) {
      alert("Invalid business name - must be at least 3 characters");
      return;
    }
    if (!budget) {
      alert("Invalid budget amount");
      return;
    }
    if (!message) {
      alert("Invalid project summary - give a summary of your project");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Invalid email address - check your email and try again");
      return;
    }

    const templateParams = {
      from_name: firstName + " " + lastName,
      business_name: businessName,
      budget,
      message,
      email,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setIsSending(false);
          form.reset(); // optional: clear form
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSending(false);
          alert("Failed to send message. Please try again.");
        },
      );
  };
  return (
    <ContactFormStyles onSubmit={sendMail}>
      <div>
        <InputContainer name="firstName" label="first name" type="text" />
        <InputContainer name="lastName" label="last name" type="text" />
      </div>
      <div>
        <InputContainer name="email" label="email" type="email" />
        <InputContainer
          name="businessName"
          label="bussiness name"
          type="text"
        />
      </div>

      <div>
        <InputContainer name="budget" label="budget ($)" type="number" />
      </div>

      <div>
        <InputContainer name="message" label="message" />
      </div>
      <FormBtn $variant="primary" disabled={isSending}>
        {!isSending ? "Submit your Message" : "sending"}
      </FormBtn>
    </ContactFormStyles>
  );
};

export default ContactForm;
