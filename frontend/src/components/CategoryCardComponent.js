import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const CategoryCardComponent = ({ title, des, image }) => {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{des}</Card.Text>
          <LinkContainer to="/product-list">
            <Button variant="primary">Buy now</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategoryCardComponent;
