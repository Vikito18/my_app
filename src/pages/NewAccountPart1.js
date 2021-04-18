import FormLastName from "../components/FormLastName";
import FormFirstName from "../components/FormFirstName";
import TitleSignUp from "../components/TitleSignUp";
import React from "react";
import ButtonReturn from "../components/ButtonReturn";
import ButtonOk from "../components/ButtonOk";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import FormMail from "../components/FormMail";



const NewAccountPart1 = () => {

    return (
        <div>
            <TitleSignUp />
            <FormLastName />
            <FormFirstName />
            <FormMail />
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <Link to="/">
                            <ButtonReturn />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/NewAccountPart2">
                            <ButtonOk />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default NewAccountPart1;