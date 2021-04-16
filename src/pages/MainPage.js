import Title from "../components/Title";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import SettingAccount from "../components/SettingAccount";
import Update from "../components/Update";
import React from "react";






function MainPage() {
    return (
        <div>
            <Title />
            <SignIn />
            <SignUp />
            <SettingAccount />
            <Update />
        </div>
    );
}
export default MainPage;
