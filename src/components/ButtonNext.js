import React from "react";
import Button from "react-bootstrap/button";
import Container from "react-bootstrap/Container";

const ButtonNext = () => {
    return (
        <Container className="rmb-2 d-flex justify-content-around">
            <Button variant="danger" type="button" className="btn btn-secondary text-center m-3" size="lg">Retour</Button>
            <Button variant="success" type="button" className="btn btn-secondary text-center m-3" size="lg">Valider</Button>
        </Container>
    );
};


export default ButtonNext;