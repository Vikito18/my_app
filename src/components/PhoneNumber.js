import Form from "react-bootstrap/Form";
import React from "react";

const PhoneNumber = () => {

    return(

        <Form>
            <Form.Group className="m-5"  controlId="formBasicLastName">
                <Form.Label>Numéro Portable</Form.Label>
                <Form.Control type="Number" placeholder="Enter NumberPhone" />
            </Form.Group>
        </Form>
    );
};

export default PhoneNumber ;