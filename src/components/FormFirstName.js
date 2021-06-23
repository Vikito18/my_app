import React from "react";
import Form from "react-bootstrap/Form";


const FormFirstName = () => {

  return (
    <Form>
      <Form.Group className="m-5"  controlId="formBasicFirstName">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="frstname" placeholder="Enter firstname" />
      </Form.Group>
    </Form>
  );
};

export default FormFirstName ;