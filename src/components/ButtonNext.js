import React from "react";
import Button from "react-bootstrap/button";

const ButtonNext = () => {
    return (
        <div className="row-6 text-center">
            <Button variant="danger" type="button" className="col-2 btn btn-secondary text-center m-5">Retour</Button>
            <Button variant="success" type="button" className="col-2 btn btn-secondary text-center m-5">Valider</Button>
        </div>
    );
};


export default ButtonNext;