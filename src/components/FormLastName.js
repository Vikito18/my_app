import Form from "react-bootstrap/form";
import React from "react";


const FormLastName = () => {

    return(

        <Form>
            <Form.Group className="m-5" controlId="formBasicLastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="Lastname" placeholder="Enter lastname" />
            </Form.Group>
        </Form>
    );
};

export default FormLastName ;