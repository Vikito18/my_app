import FormAccountName from "../components/FormAccountName";
import FormPassword from "../components/FormPassword";
import FormConfirmPassword from "../components/FormConfirmPassword";
import TitleSignUp from "../components/TitleSignUp";
import ButtonNext from "../components/ButtonNext";
import React from "react";


const NewAccountPart2 = () => {

    return (
        <div className="container">
            <TitleSignUp />
            <FormAccountName />
            <FormPassword />
            <FormConfirmPassword />
            <ButtonNext />
        </div>
    );
};
export default NewAccountPart2;