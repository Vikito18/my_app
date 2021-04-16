import FormAccountName from "../components/FormAccountName";
import FormPassword from "../components/FormPassword";
import TitleSignIn from "../components/TitleSignIn";
import React from "react";
import ForgotPassword from "../components/ForgotPassword";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonReturn from "../components/ButtonReturn";
import ButtonOk from "../components/ButtonOk";
import { Link } from "react-router-dom";


const Account = () => {

    return (
        <div>
            <TitleSignIn />
            <FormAccountName />
            <FormPassword />
            <Link to="/PasswordRecovery">
                <ForgotPassword />
            </Link>
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to="/MainPage">
                            <ButtonReturn />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="BudgetManagement">
                            <ButtonOk />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Account;