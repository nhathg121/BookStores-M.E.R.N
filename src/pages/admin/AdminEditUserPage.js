import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//
//

function AdminEditUserPage() {
  const [validated, setValidated] = useState(false);
  const updateHandle = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return 0;
    }
    console.log(form.checkValidity());
    window.alert("123");
  };

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
      <Row className="justify-content-md-center  mt-5">
        <Col md={1}>
          <Link to="/admin/users" className="btn btn-info my-3">
            Go Back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit User</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" type="text" defaultValue="Japan" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>LastName</Form.Label>
              <Form.Control name="lastName" type="text" defaultValue="Toyota" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="price"
                required
                type="Email"
                defaultValue="japan123@gmail.com"
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid entry.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Check label="Is Admin" id="checkbox-id" />
            </Form.Group>

            <Button
              onClick={updateHandle}
              variant="primary"
              type="submit"
              className="mb-5"
            >
              {" "}
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEditUserPage;
