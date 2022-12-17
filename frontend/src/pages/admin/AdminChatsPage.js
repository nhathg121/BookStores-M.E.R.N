import AdminChatRoomComponent from "../../components/admin/AdminChatRoomComponent";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { Row, Col } from "react-bootstrap";

//

//

const AdminChatsPage = () => (
  <Row className="m-5">
    <Col md={2}>
      {" "}
      <AdminLinksComponent />
    </Col>
    <Col md={8}>
      <AdminChatRoomComponent />
    </Col>
  </Row>
);
export default AdminChatsPage;
