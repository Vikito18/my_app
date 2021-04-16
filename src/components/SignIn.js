import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const SignIn = () => {

    return (

        <div className="row-12 text-center">
            <Link to="/Account">
                <Button type="button" className="col-8 btn btn-secondary text-center m-5"> S{"'"}identifier</Button>
            </Link>
        </div>);

};
export default SignIn;