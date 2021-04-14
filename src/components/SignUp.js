import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const SignUp = () => {

    return (

        <div className="row-12 text-center">
            <Link href="../pages/NewAccount">
                <a>
                    <Button  type="button" className="col-8 btn btn-secondary text-center m-5">Nouveau compte</Button>
                </a>
            </Link>
        </div>


    );
};
export default SignUp;