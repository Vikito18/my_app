import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Account from "./pages/Account";
import BudgetManagement from "./pages/BudgetManagement";
import NewAccountPart1 from "./pages/NewAccountPart1";
import NewAccountPart2 from "./pages/NewAccountPart2";
import PasswordRecovery from "./pages/PasswordRecovery";

const App = () => {

    return(

        <Router>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/Account" component={Account}/>
                <Route path="/BudgetManagement" component={BudgetManagement}/>
                <Route path="/NewAccountPart1" component={NewAccountPart1}/>
                <Route path="/NewAccountPart2" component={NewAccountPart2}/>
                <Route path="/PasswordRecovery" component={PasswordRecovery}/>
            </Switch>
        </Router>
    );
};

export default App;