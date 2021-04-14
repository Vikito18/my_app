import FormLastName from "../components/FormLastName";
import FormFirstName from "../components/FormFirstName";
import PhoneNumber from "../components/PhoneNumber";
import TitleSignUp from "../components/TitleSignUp";
import ButtonNext from "../components/ButtonNext";
import React from "react";


const NewAccountPart1 = () => {

    return (
        <div className="container">
            <TitleSignUp />
            <FormLastName />
            <FormFirstName />
            <PhoneNumber />
            <ButtonNext />
        </div>
    );
};
export default NewAccountPart1;