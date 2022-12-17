import React from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";

function CartItemComponent() {
  return (
    <Row>
      <Col md={2}>
        <Image
          fluid
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.18169-9/11057339_1002527499757894_7211414614790090080_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=6QC-0WTBvm4AX9J4EFW&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBybvBa23pqZATZjPLVFaiDHH0BUvZlxnbQjXfcWOdYmg&oe=63BD09D8"
        ></Image>
      </Col>
      <Col md={2}>Product Name</Col>
      <Col md={2}>
        <span className="fw-bold">$892</span>
      </Col>
      <Col md={3}>
        <Form.Select aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Col>
      <Col md={3}>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            window.confirm("Are U Sure ?");
          }}
        >
          <i className="bi bi-trash3-fill"></i>
        </Button>
      </Col>
    </Row>
  );
}

export default CartItemComponent;
