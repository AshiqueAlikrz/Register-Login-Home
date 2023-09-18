import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container
        bg="primary"
        className="d-flex justify-content-center align-items-center flex-column vh-100"
      >
        <h3>Home Page</h3>

        <h1>hy, Ashique Ali Krz</h1>
      </Container>    
    </div>
  );
};

export default Home;
