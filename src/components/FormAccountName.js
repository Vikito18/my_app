import React from "react";
import Form from "react-bootstrap/Form";


const FormAccountName = () => {

    return (
        <Form>
            <Form.Group className="m-5"  controlId="formBasicName">
                <Form.Label>Nom du compte</Form.Label>
                <Form.Control type="name" placeholder="Enter Account name" />
            </Form.Group>
        </Form>
    );
};

export default FormAccountName ;