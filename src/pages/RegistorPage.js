import { useState } from "react";
import {
  Alert,
  Spinner,
  Form,
  Col,
  Row,
  Container,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const RegistorPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* NAME------------------------------------- */}
            <Row className="mb-3">
              <Form.Group controlId="validationCustom01">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  name="name"
                  required
                  type="text"
                  placeholder="Enter Your Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* NAME------------------------------------- */}
            <Row className="mb-3">
              <Form.Group controlId="formBasicName">
                <Form.Label>Your Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  required
                  type="text"
                  placeholder="Enter Your Last Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name
                </Form.Control.Feedback>
                <Form.Control.Feedback>Good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* NAME------------------------------------- */}
            <Row className="mb-3">
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email address"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your email.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                {/* NAME------------------------------------- */}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  required
                  type="password"
                  placeholder="Password"
                  minLength={6}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid password
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* NAME------------------------------------- */}
            <Row className="mb-3">
              <Form.Group controlId="formBasicPasswordRepeat">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  required
                  type="password"
                  placeholder="Repeat Password"
                  minLength={6}
                />
                <Form.Control.Feedback type="invalid">
                  Both passwords should match
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="pb-2">
              <Col>
                Do you have any account already?
                <Link to={"/login"}> Login</Link>
              </Col>
            </Row>
            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              {"  "}
              Register
            </Button>
            <Alert show={true} variant="danger">
              User with that email already exists!
            </Alert>
            <Alert show={true} variant="success">
              User created !
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistorPage;
