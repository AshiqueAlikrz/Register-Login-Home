import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import './Style.css';

const About = () => {
  const navigate = useNavigate();

  const ToHome = () => {
    navigate("/toHome");
  };
  return (
    <div className="styleColor">
      <br />
      <Container className=" d-flex justify-content-center align-items-center flex-column vh-100">
      <h1 className="mb-3 w-50"> Login Page</h1>

        <FloatingLabel
          controlId="floatingInput "
          label="Email address"
          className="mb-3 w-50"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3 w-50"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <br />
        <Button variant="danger  m-2 p-3 w-25" onClick={ToHome}>
          Login
        </Button>
      </Container>
    </div>
  );
};

export default About;
