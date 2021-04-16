import FormAccountName from "../components/FormAccountName";
import FormPassword from "../components/FormPassword";
import FormConfirmPassword from "../components/FormConfirmPassword";
import TitleSignUp from "../components/TitleSignUp";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonReturn from "../components/ButtonReturn";
import ButtonOk from "../components/ButtonOk";
import { Link } from "react-router-dom";


const NewAccountPart2 = () => {

    return (
        <div>
            <TitleSignUp />
            <FormAccountName />
            <FormPassword />
            <FormConfirmPassword />
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to="/NewAccountPart1">
                            <ButtonReturn />
                        </Link>
                    </Col>
                    <Col>
                        <ButtonOk />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default NewAccountPart2;