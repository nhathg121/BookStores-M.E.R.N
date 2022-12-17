import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const RatingFilterComponent = () => (
  <>
    <span className="fw-bold">Rating</span>
    {Array.from({ length: 5 }).map((_, ind) => {
      return (
        <Form.Check key={ind} type="checkbox" id={`check-api`}>
          <Form.Check.Input type="checkbox" isValid />
          <Form.Check.Label style={{ cursor: "pointer" }}>
            <Rating readonly size={20} initialValue={5 - ind} />
          </Form.Check.Label>
        </Form.Check>
      );
    })}
  </>
);

export default RatingFilterComponent;
