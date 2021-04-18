import Form from "react-bootstrap/Form";
import React from "react";

const FormMail = () => {

    return(

        <Form>
            <Form.Group className="m-5"  controlId="mail">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control type="Number" placeholder="Enter mail" />
            </Form.Group>
        </Form>
    );
};

export default FormMail;