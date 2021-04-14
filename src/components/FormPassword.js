import React from "react";
import Form from "react-bootstrap/Form";


const FormPassword = () => {

    return (
        <Form>
            <Form.Group className="m-5"  controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="frstname" placeholder="Enter firstname" />
            </Form.Group>
        </Form>
    );
};

export default FormPassword ;