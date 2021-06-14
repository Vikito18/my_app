import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import BudgetManagement from "./pages/BudgetManagement";
import SignUp from "./pages/SignUp";
import PasswordRecovery from "./pages/PasswordRecovery";
import GeneralSetting from "./pages/GeneralSetting";
import SettingAccount from "./pages/SettingAccount";
import AccountNameModify from "./pages/AccountNameModify";
import MailModify from "./pages/MailModify";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/BudgetManagement" component={BudgetManagement} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/PasswordRecovery" component={PasswordRecovery} />
        <Route path="/GeneralSetting" component={GeneralSetting} />
        <Route path="/SettingAccount" component={SettingAccount} />
        <Route path="/AccountNameModify" component={AccountNameModify} />
        <Route path="/MailModify" component={MailModify} />
      </Switch>
    </Router>
  );
};

export default App;
