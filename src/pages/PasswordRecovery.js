import FormLastName from "../components/FormLastName";
import FormFirstName from "../components/FormFirstName";
import PhoneNumber from "../components/PhoneNumber";
import TitleRecovery from "../components/TitleRecovery";
import ButtonNext from "../components/ButtonNext";
import React from "react";


const PasswordRecovery = () => {

    return (
        <div className="container">
            <TitleRecovery />
            <FormLastName />
            <FormFirstName />
            <PhoneNumber />
            <ButtonNext />
        </div>
    );
};
export default PasswordRecovery;