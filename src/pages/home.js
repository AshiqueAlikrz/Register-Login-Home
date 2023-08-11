import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Home = () => {
 
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/about");
  };

  return (
    <div>
      <Container
        bg="primary"
        className="d-flex justify-content-center align-items-center flex-column vh-100"
      >
        <h1>REGISTER ACCOUNT</h1>
        <br />

        <FloatingLabel
          controlId="floatingInput "
          label="Full name "
          className="mb-3 w-50"
        >
          <Form.Control type="text" placeholder="Full name" />
        </FloatingLabel>

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
        <Form.Text id="passwordHelpBlock" muted >
            <h6>Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.</h6>
        </Form.Text>
        <br />

        <Button variant="success m-2 p-3 w-25" onClick={toLogin}>
          REGISTER
        </Button>
      </Container>
    </div>
  );
};

export default Home;
