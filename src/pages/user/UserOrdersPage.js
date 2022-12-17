import { Container, Row, Col, Table } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function UserOrdersPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={12}>
          <h1>order</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Order Details</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>John Doe</td>
                    <td>3022-03-17</td>
                    <td>400</td>
                    <td className={item}></td>

                    <td>
                      <Link to="/user/order-details"> Go to order</Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default UserOrdersPage;
