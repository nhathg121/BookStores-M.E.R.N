import React, { useState } from "react";
import {
  CloseButton,
  Form,
  Button,
  Row,
  Col,
  Container,
  Table,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
//
//
function AdminCreateProductPage() {
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
      <Row className="justify-content-md-center  mt-5">
        <Col md={1}>
          <Link to="/admin/product" className="btn btn-info my-3">
            Go Back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Create a new product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Placeholder text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                rows={5}
                name="name"
                as="textarea"
                placeholder="Placeholder text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Count in stock</Form.Label>
              <Form.Control name="count" required type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" required type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>
                Category<i class="bi bi-x-lg"></i>
                (removed selected)
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Choose category</option>
                <option value="1">book</option>
                <option value="2">novel</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="form-group-id">
              <Form.Label>
                Or create a new category (e.g Book/Novel/...)
              </Form.Label>
              <Form.Control type="text" name="newCategory" />
            </Form.Group>
            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttribute">
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    name="atrrKey"
                    aria-label="Default select example"
                  >
                    <option>Choose attribute</option>
                    <option value="1">color</option>
                    <option>size</option>
                    <option>heigh</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttribute">
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    name="atrrKey"
                    aria-label="Default select example"
                  >
                    <option>Choose attribute</option>
                    <option value="1">color</option>
                    <option>size</option>
                    <option>heigh</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Table striped bordered hover hidden={false}>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AttriKey</td>
                    <td>AttriValue</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Label>Create new attribute</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First choose or create Category"
                />
              </Col>
              <Col md={6}>
                <Form.Label>Create new attribute</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First choose or create Category"
                />
              </Col>
              <Alert variant="primary mt-4">
                After typing attribute key and value press enter on one of the
                field
              </Alert>
            </Row>

            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
              <Form.Label>Images</Form.Label>
              <Form.Control type="file" multiple />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-5">
              {" "}
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminCreateProductPage;
