import FormAccountName from "../components/FormAccountName";
import FormPassword from "../components/FormPassword";
import TitleSignIn from "../components/TitleSignIn";
import ButtonNext from "../components/ButtonNext";
import React from "react";


const Account = () => {

    return (
        <div className="container">
            <TitleSignIn />
            <FormAccountName />
            <FormPassword />
            <ButtonNext />
        </div>
    );
};
export default Account;