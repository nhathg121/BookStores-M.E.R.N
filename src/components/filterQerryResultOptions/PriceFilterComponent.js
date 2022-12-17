import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>Range</Form.Label>

      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 500$
        <Form.Range min={10} max={1000} step={10} />
      </Form.Label>
    </>
  );
};
export default PriceFilterComponent;
