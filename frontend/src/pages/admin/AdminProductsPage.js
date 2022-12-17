import { Container, Row, Col, Table, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const deleteHandler = () => {
  if (window.confirm("are u sure?")) alert("product delete");
};

function AdminProductsPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>
            Product list{"     "}
            <LinkContainer to="/admin/create-new-product">
              <Button variant="primary" size="lg">
                Create New
              </Button>
            </LinkContainer>
          </h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Product 1", price: 500, category: "Book" },
                { name: "Product 2", price: 500, category: "Book" },
                { name: "Product 3", price: 500, category: "Book" },
                { name: "Product 4", price: 500, category: "Book" },
                { name: "Product 5", price: 500, category: "Book" },
                { name: "Product 6", price: 500, category: "Book" },
                { name: "Product 7", price: 500, category: "Book" },
                { name: "Product 8", price: 500, category: "Book" },
                { name: "Product 9", price: 500, category: "Book" },
                { name: "Product 10", price: 500, category: "Book" },
                { name: "Product 11", price: 500, category: "Book" },
              ].map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>${item.price + 1355}</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to="/admin/edit-product">
                      <Button type="button">
                        {" "}
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </Link>
                    {"  "} /{" "}
                    <Button
                      className="btn-danger"
                      type="button "
                      onClick={deleteHandler}
                    >
                      {" "}
                      <i className="bi bi-x-square"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default AdminProductsPage;
