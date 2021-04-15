import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const SignUp = () => {
    

    return (

        <div className="row-12 text-center">
            <Link to="./NewAccountPart1">
                <Button type="button" className="col-8 btn btn-secondary text-center m-5">Nouveau compte</Button>
            </Link>
        </div>
    );
};
export default SignUp;