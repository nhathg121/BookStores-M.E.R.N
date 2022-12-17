import { Alert, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => (
  <div
    style={{
      height: "100vh",
      background:
        "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,112,253,1) 100%)",
      overflow: "hidden",
    }}
  >
    <Row className="mt-5 ">
      <Col
        lg={4}
        md={6}
        sm={2}
        className="border border-warning rounded-4 m-auto"
        style={{
          backgroundColor: "#332d2d",
          color: "white",
        }}
      >
        <Form className="text-center">
          <Form.Group className="my-5" controlId="formBasicLogin">
            <Form.Label>
              <h1>Login</h1>
              <Form.Text className="text-muted">
                Please enter your login and password !
              </Form.Text>
            </Form.Label>

            <Form.Control
              md={3}
              className="m-auto mt-4"
              style={{
                width: "85%",
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "3px",
                borderColor:
                  "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,112,253,1) 100%);",
              }}
              type="email"
              placeholder="Email"
            />
            <Form.Control
              md={3}
              className="m-auto mt-4 mb-3"
              style={{
                width: "85%",
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "3px",
                borderColor:
                  "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,112,253,1) 100%);",
              }}
              type="password"
              placeholder="Password"
            />
            <Form.Text className="text-muted ">
              <Link className="text-secondary" to="/registor">
                Forgot password ?
              </Link>
            </Form.Text>
          </Form.Group>{" "}
          <div className="text-center">
            <Button
              type="submit"
              className="px-5 bg-transparent mb-4  border-white"
            >
              <Spinner animation="border" role="status" size="sm" />
              {"  "}Login
            </Button>

            <Alert
              variant="danger"
              style={{
                width: "85%",
              }}
              className="m-auto mb-3"
            >
              User with that email already exists! pls try another one
            </Alert>
            <Alert
              variant="primary"
              style={{
                width: "85%",
              }}
              className="m-auto mb-3"
            >
              User Created.
              <br />
              Check your email to verify information
            </Alert>
          </div>
          <div className="social text-center mb-5">
            <span className="mx-3 fs-5 text-white ">
              <i className="bi bi-facebook"></i>
            </span>
            <span className="mx-3 fs-5 text-white ">
              <i class="bi bi-twitter"></i>
            </span>
            <span className="mx-3 fs-5 text-white ">
              <i class="bi bi-google"></i>
            </span>
          </div>
          <Form.Text className="fst-normal text-light ">
            Don't have an account?{" "}
            <Link to="/registor">
              <span className="fw-bolder text-secondary ">Sign Up</span>
            </Link>
          </Form.Text>
        </Form>
        <br />
        <br />
      </Col>
    </Row>
  </div>
);
export default LoginPage;
