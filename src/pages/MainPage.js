import Title from "../components/Title";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import SettingAccount from "../components/SettingAccount";
import Update from "../components/Update";
import React from "react";
import {LinkContainer} from "react-router-bootstrap";






function MainPage() {
    return (
        <div>
            <Title />
            <SignIn />
            <LinkContainer to="/NewAccountPart1">
                <SignUp />
            </LinkContainer>
            <SettingAccount />
            <Update />
        </div>
    );
}
export default MainPage;
