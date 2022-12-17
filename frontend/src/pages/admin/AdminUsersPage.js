import { Button, Container, Row, Col, Table } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";

const deleteHandler = () => {
  if (window.confirm("are u sure?"))
    setTimeout(() => alert("product delete"), 1000);
};
function AdminUsersPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>User List </h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Is Admin</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>Japan</td>
                    <td>Toyota</td>
                    <td>japan123@gmail.com</td>
                    <td className={item}></td>
                    <td>
                      <Link to="/admin/edit-user">
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
                )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default AdminUsersPage;
