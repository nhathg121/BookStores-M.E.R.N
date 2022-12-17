import {
  Image,
  Row,
  Col,
  Container,
  ListGroup,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";
import { useEffect } from "react";

const ProductDetailPage = () => {
  var options = {
    width: 400,
    height: 200,
    zoomWidth: 900,
    // zoomHeight: 700,
    // fillContainer: true,
    scale: 2,
    offset: { vertical: 0, horizontal: 10 },
    zoomPosition: "right",
  };
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        {/* --------------------------------------Product Image -------------------------------------- */}
        <Col lg={4} md={4} style={{ zIndex: 1 }}>
          <div md={4} id="first">
            <Image
              // crossOrigin="anonymous"
              fluid
              src="https://placeimg.com/1600/800/any"
            />
          </div>
          <br />
          <div md={4} id="second">
            <Image
              // crossOrigin="anonymous"
              fluid
              src="https://placeimg.com/1600/800/any"
            />
          </div>
          <br />
          <div md={4} id="third">
            <Image
              // crossOrigin="anonymous"
              fluid
              src="https://placeimg.com/1600/800/any"
            />
          </div>
          <br />
          <div md={4} id="fourth">
            <Image
              // crossOrigin="anonymous"
              fluid
              src="https://placeimg.com/1600/800/any"
            />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            {/* --------------------------------------Product Information -------------------------------------- */}
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {" "}
                  <h1>Product Name</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4}></Rating> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold"> $200</span>
                </ListGroup.Item>

                <ListGroup.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ea nulla hic officia perferendis molestias expedita
                  illum qui molestiae.
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero, voluptatem saepe dolorem at placeat iusto cum
                  neque voluptate.
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero, voluptatem saepe dolorem at placeat iusto cum
                  neque voluptate.
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus vero, voluptatem saepe dolorem at placeat iusto cum
                  neque voluptate.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            {/* --------------------------------------Product S tatus , quantity -------------------------------------- */}
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: inStock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <b>$200</b>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Form.Select aria-label="Default select example">
                    <option>Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </ListGroup.Item>

                <ListGroup.Item>
                  <hr />
                  <Button
                    style={{ marginLeft: "20px" }}
                    variant="danger"
                    onClick={() => 0}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>
                <b>REVIEWS</b>
              </h5>
              <ListGroup variant="flush">
                {Array.from({ length: 3 }).map((item, ind) => {
                  return (
                    <ListGroup.Item key={ind}>
                      John Doe <br />
                      <Rating readonly size={20} initialValue={4} />
                      <br />
                      20-09-2001 <br />
                      San pham nay dung tam on, thich thi mua khong thich thi
                      mua
                    </ListGroup.Item>
                  );
                })}
                <ListGroup.Item> Lorem ipsum dolor sit amet.</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your Rating</option>
              <option value="5">5 (very good)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (awful)</option>
            </Form.Select>
          </Form>
          <Button className="mb-3 mt-3" variant="primary">
            Submit
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
