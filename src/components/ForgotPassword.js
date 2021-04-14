import React from "react";
import Link from "next/link";

const ForgotPassword = () => {
    return (
        <div className="row-12 text-center">
            <Link href="../pages/NewAccount">
                <a className="col-6 btn btn-secondary text-center m-5">Not de passe oublié ?
                </a>
            </Link>
        </div>    );
};

export default ForgotPassword;