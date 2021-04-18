import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const Setting = () => {

    return (

        <div className="row-12 text-center">
            <Link to="/GeneralSetting">
                <Button type="button" className="col-8 btn btn-secondary text-center m-5">Paramètre</Button>
            </Link>
        </div>);
};
export default Setting;