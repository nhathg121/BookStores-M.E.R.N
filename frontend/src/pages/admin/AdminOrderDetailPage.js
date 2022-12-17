import {
  ListGroup,
  Container,
  Row,
  Col,
  Alert,
  Form,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";

const AdminOrderDetailPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h2>Order Details</h2>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: Nhat <br />
              <b>Address</b>: Ha Noi <br />
              <b>Phone</b>: 12345
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select disabled={false}>
                <option value="cod">
                  {" "}
                  Cash on Delivery (Delevery maybe delayed)
                </option>
                <option value="pp"> Paypal</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Alert variant="danger" className="mt-3">
                Not delivered
              </Alert>
            </Col>
            <Col md={6}>
              <Alert variant="success" className="mt-3">
                Paid on 02-10-2021
              </Alert>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order sumary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$100</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="text-danger fw-bold">$100</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              <LinkContainer to="/user/cart-details">
                <Button size="lg" type="button" variant="danger">
                  Pay for the order
                </Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <h1>Order items</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 2 }).map((item, index) => {
              return (
                <ListGroup.Item key={index}>
                  <CartItemComponent key={index} />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default AdminOrderDetailPage;
