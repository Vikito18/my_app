import React from "react";
import Form from "react-bootstrap/Form";


const FormConfirmPassword = () => {

    return (
        <Form>
            <Form.Group className="m-5"  controlId="formBasicPassword">
                <Form.Label>Confirmation Mot de passe</Form.Label>
                <Form.Control type="Password" placeholder="Comfirm Password" />
            </Form.Group>
        </Form>
    );
};

export default FormConfirmPassword ;