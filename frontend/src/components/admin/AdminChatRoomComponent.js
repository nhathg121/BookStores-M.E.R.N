import { Fragment, useState } from "react";
import { Form, Toast, Button, Row, Col } from "react-bootstrap";

const AdminChatRoomComponent = () => {
  const [toast1, closeToast1] = useState(true);
  const close1 = () => {
    return closeToast1(false);
  };
  const [toast2, closeToast2] = useState(true);
  const close2 = () => {
    return closeToast2(false);
  };
  return (
    <>
      <Row>
        <Col md={6}>
          <Toast
            show={toast1}
            onClose={close1}
            className="ms-4 mb-5 p-3"
            style={{ width: "500px" }}
          >
            <Toast.Header>
              <strong className="me-auto"> Chat with Japan</strong>
            </Toast.Header>
            <Toast.Body>
              <div style={{ maxHeight: "400px", overflow: "auto" }}>
                {Array.from({ length: 28 }).map((_, index) => (
                  <Fragment key={index}>
                    <p className="bg-primary  p-3 rounded-4 text-light ms-5">
                      <b>Your Wrote: </b> Xin Chao Ban dang quan tam den san
                      pham gi the
                    </p>
                    <p className="bg-white ">
                      <b>User Wrote: </b> Nothing i just want to check typing
                    </p>
                  </Fragment>
                ))}
              </div>
            </Toast.Body>

            <Form>
              <Form.Group controlId="form-group-id" className="my-3">
                <Form.Label>Write a message</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="send something..."
                />
              </Form.Group>
              <Button variant="success" onClick={() => console.log("Success")}>
                Success
              </Button>
            </Form>
          </Toast>
        </Col>
        <Col md={6}>
          <Toast
            show={toast2}
            onClose={close2}
            className="ms-4 mb-5 p-3"
            style={{ width: "500px" }}
          >
            <Toast.Header>
              <strong className="me-auto"> Chat with Japan</strong>
            </Toast.Header>
            <Toast.Body>
              <div style={{ maxHeight: "400px", overflow: "auto" }}>
                {Array.from({ length: 28 }).map((_, index) => (
                  <Fragment key={index}>
                    <p className="bg-primary  p-3 rounded-4 text-light ms-5">
                      <b>Your Wrote: </b> Xin Chao Ban dang quan tam den san
                      pham gi the
                    </p>
                    <p className="bg-white ">
                      <b>User Wrote: </b> Nothing i just want to check typing
                    </p>
                  </Fragment>
                ))}
              </div>
            </Toast.Body>

            <Form>
              <Form.Group controlId="form-group-id" className="my-3">
                <Form.Label>Write a message</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="send something..."
                />
              </Form.Group>
              <Button variant="success" onClick={() => console.log("Success")}>
                Success
              </Button>
            </Form>
          </Toast>
        </Col>
      </Row>
    </>
  );
};
export default AdminChatRoomComponent;
