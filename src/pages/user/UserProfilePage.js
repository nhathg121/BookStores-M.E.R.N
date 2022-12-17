import { Row, Col, Form, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";

const UserProfilePage = () => {
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
      <Row className="mt-5 justify-content-center">
        <Col md={6} sm={10}>
          <h1>Change Your Infomation</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* NAME------------------------------------- */}
            <Row className="mb-3">
              <Form.Group controlId="validationCustom01">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  name="name"
                  required
                  type="text"
                  defaultValue="Nhat"
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
                  defaultValue="Nguyen Van"
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
                  type="email"
                  placeholder="if you want to change email, pls remove this account and create a new one with new email address"
                  disabled
                />
                <Form.Control.Feedback type="invalid">
                  Please enter email address
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phoneNumber"
                  type="tel"
                  placeholder="0912345678"
                  minLength={9}
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid phone number
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* NAME------------------------------------- */}
            <Row className="mb-3">
              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control name="address" required type="text" />
                <Form.Control.Feedback type="invalid">
                  Please enter your address to shipping
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicCountry">
                <Form.Control name="country" required type="text" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicZipCode">
                <Form.Label>zip code</Form.Label>
                <Form.Control name="zipCode" required type="text" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control name="city" required type="text" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicStage">
                <Form.Label>Stage</Form.Label>
                <Form.Control name="stage" required type="text" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  required
                  type="text"
                  minLength={6}
                />
                <Form.Text muted>
                  Password should have at least 6 characters
                </Form.Text>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicPasswordRepeat">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  name="repeatPassword"
                  required
                  type="text"
                  minLength={6}
                />
                <Form.Text muted>Repeat Password</Form.Text>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-evenly mb-2">
              <Button type="submit" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" disabled>
                Save Change
              </Button>
            </div>
            <Alert show={true} variant="success">
              Complete !
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfilePage;
