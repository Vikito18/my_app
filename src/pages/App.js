import Title from "../components/Title";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import SettingAccount from "../components/SettingAccount";
import Update from "../components/Update";
import React from "react";
import { BrowserRouter } from "react-router-dom";



function App() {
    return (
        <div>
            <Title />
            <SignIn />
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
            <SettingAccount />
            <Update />
        </div>
    );
}
export default App;
