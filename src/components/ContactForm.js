import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvdzyqe");

  if (state.succeeded) {
    return (
      <p className="text-success">
        Thanks for reaching out! I will get in contact with you shortly.
      </p>
    );
  }

  return (
    <Form
      className="d-flex flex-column align-items-center text-center bg-black text-white py-3"
      onSubmit={handleSubmit}
    >
      <p className="intro-message">
        Thank you for your interest! 
        <br/>
        Please fill out the form below to contact
        me. 
        <br/>
        I'll get back to you shortly via email. 
        <br/>
        If you would like to be
        contacted via phone, please leave your phone number in the field
        provided.
      </p>

      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="phone" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          style={{ minHeight: "150px", height: "auto" }}
          className="resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Form.Group>

      <Button
        type="submit"
        disabled={state.submitting}
        className="mt-3"
        style={{ width: "200px" }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
