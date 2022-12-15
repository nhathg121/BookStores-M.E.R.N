import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function AdminLinksComponent() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <LinkContainer to="/admin/orders">
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/products">
          <Nav.Link active>Product</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/users">
          <Nav.Link>User List</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/chat">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/analystic">
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
          <Nav.Link>Logout</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default AdminLinksComponent;
