import React from "react";
import { Form } from "react-bootstrap";
function AttributesFilterComponent() {
  return (
    <>
      {[
        { color: ["red", "blue", "green"] },
        { ram: ["1 TB", "2 TB", "3 TB"] },
        { type: ["Romantic", "creepy", "Novel", "Thriller"] },
      ].map((item, ind) => {
        return (
          <div key={ind} className="mb-3">
            <Form.Label>
              <b>{Object.keys(item)}</b>
            </Form.Label>
            {item[Object.keys(item)].map((i, ind) => (
              <Form.Check
                key={ind}
                type="checkbox"
                id="default-checkbox"
                label={i}
              />
            ))}
          </div>
        );
      })}
    </>
  );
}

export default AttributesFilterComponent;
